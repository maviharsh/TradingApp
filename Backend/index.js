const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { PositionModel } = require("./model/PositionsModel");
const { HoldingsModel } = require("./model/HoldingsModel");
const OrdersModel = require("./model/OrdersModel");

const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const jwt = require("jsonwebtoken");
const { UserModel } = require("./model/UserModel");

app.use(
  cors({
    origin: "https://tradingapp-dashboard.onrender.com",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

const PORT = process.env.PORT_NUMBER || 4000;
const url = process.env.MONGO_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("NICE");
});

/*app.get("/addHoldings",(req,res)=>{
    let tempHoldings=[ {
        name: "BHARTIARTL",
        qty: 2,
        avg: 538.05,
        price: 541.15,
        net: "+0.58%",
        day: "+2.99%",
      },   
      {
        name: "HDFCBANK",
        qty: 2,
        avg: 1383.4,
        price: 1522.35,
        net: "+10.04%",
        day: "+0.11%",
      },
      {
        name: "HINDUNILVR",
        qty: 1,
        avg: 2335.85,
        price: 2417.4,
        net: "+3.49%",
        day: "+0.21%",
      },
      {
        name: "INFY",
        qty: 1,
        avg: 1350.5,
        price: 1555.45,
        net: "+15.18%",
        day: "-1.60%",
        isLoss: true,
      },
      {
        name: "ITC",
        qty: 5,
        avg: 202.0,
        price: 207.9,
        net: "+2.92%",
        day: "+0.80%",
      },
      {
        name: "KPITTECH",
        qty: 5,
        avg: 250.3,
        price: 266.45,
        net: "+6.45%",
        day: "+3.54%",
      },
      {
        name: "M&M",
        qty: 2,
        avg: 809.9,
        price: 779.8,
        net: "-3.72%",
        day: "-0.01%",
        isLoss: true,
      },
      {
        name: "RELIANCE",
        qty: 1,
        avg: 2193.7,
        price: 2112.4,
        net: "-3.71%",
        day: "+1.44%",
      },
      {
        name: "SBIN",
        qty: 4,
        avg: 324.35,
        price: 430.2,
        net: "+32.63%",
        day: "-0.34%",
        isLoss: true,
      },
      {
        name: "SGBMAY29",
        qty: 2,
        avg: 4727.0,
        price: 4719.0,
        net: "-0.17%",
        day: "+0.15%",
      },
      {
        name: "TATAPOWER",
        qty: 5,
        avg: 104.2,
        price: 124.15,
        net: "+19.15%",
        day: "-0.24%",
        isLoss: true,
      },
      {
        name: "TCS",
        qty: 1,
        avg: 3041.7,
        price: 3194.8,
        net: "+5.03%",
        day: "-0.25%",
        isLoss: true,
      },
      {
        name: "WIPRO",
        qty: 4,
        avg: 489.3,
        price: 577.75,
        net: "+18.08%",
        day: "+0.32%",
      }];

      tempHoldings.forEach((item)=>{
            let newHolding=new HoldingsModel({
                name:item.name,
                qty:item.qty,
                avg:item.avg,
                price:item.price,
                net:item.net,
                day:item.day,
             });
             newHolding.save()
             .then(()=>{
                console.log("Holdings added");
             })
             .catch((err)=>{
                console.log(err);
             })
      })
      res.send("DONE");
})*/
/*
app.get("/addPositions",(req,res)=>{
         let tempPosition=[{
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: "+0.58%",
            day: "-1.24%",
            isLoss: true,
          },
          {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: "+10.04%",
            day: "-1.35%",
            isLoss: true,
          },
        ];
        
        tempPosition.forEach((item)=>{
             let newPosition=new PositionModel({
                product: item.product,
                name: item.name,
                qty: item.qty,
                avg: item.avg,
                price: item.price,
                net: item.net,
                day: item.day,
                isLoss: item.isLoss,
             });

              newPosition.save()
              .then(()=>{
                console.log("added successfully");
                })
              .catch((err)=>{
                 console.log(err);
                })
        })
        res.send("Positions added");
});
*/

app.get("/allHoldings", async (req, res) => {
  let holdings = await HoldingsModel.find({});
  res.send(holdings);
});

app.get("/allPositions", async (req, res) => {
  let positions = await PositionModel.find({});
  res.send(positions);
});

app.post("/newOrder", async (req, res) => {
  console.log("Recieved Api request");

  try {
    const token = req.cookies.token;

    if (!token) {
      console.log("Token Not found");
      return res.status(401).json("Token Not Found");
    }

    let userid;

    jwt.verify(token, process.env.TOKEN_KEY, async(err, payload) => {
      if (err) {
        console.log(err);
        return res.status(401).json("Token Not Valid");
      } else {
        userid = payload.id;
        console.log(payload.id);
      }
    });

    const user = UserModel.findById(userid);

    if (!user) {
      return res.status(401).json("User Not Found");
    }

    let newOrder = new OrdersModel({
      user: userid,
      name: req.body.name,
      price: req.body.price,
      qty: req.body.qty,
      mode: req.body.mode,
    });
    await newOrder.save();

    UserModel.orders.push(newOrder._id);
    await newOrder.save();

    return res
      .status(200)
      .json({ message: "Order saved successfully", order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err); // ✅ Log the error to see details
    res
      .status(500)
      .json({ error: "Failed to save order", details: err.message });
  }
});

app.post("/sell", async (req, res) => {
  console.log("Received API request");

  try {
    // Find all orders of the given stock name
    const stocks = await OrdersModel.find({ name: req.body.name });

    let availableQuantity = 0;

    stocks.forEach((st) => {
      if (st.mode === "BUY") availableQuantity += st.qty;
      else availableQuantity -= st.qty;
    });

    const sellingQuantity = req.body.qty;

    console.log(availableQuantity, "---->", sellingQuantity);

    if (availableQuantity < sellingQuantity) {
      return res.status(400).json({ message: "Insufficient stock to sell" });
    }

    const token = req.cookies.token;

    if (!token) {
      console.log("Token Not Found");
      return res.status(401).json({ message: "Token Not Found" });
    }

    // ✅ Use a Promise for jwt.verify
    const payload = await new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });

    const userid = payload.id;
    console.log("User ID:", userid);

    // ✅ Fetch the user properly
    const user = await UserModel.findById(userid);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // ✅ Create new order
    const newOrder = new OrdersModel({
      user: userid,
      name: req.body.name,
      price: req.body.price,
      qty: req.body.qty,
      mode: req.body.mode,
    });

    await newOrder.save();

    // ✅ Push new order ID into user's orders array and save the user
    user.orders.push(newOrder._id);
    await user.save(); // ✅ Save the updated user document

    return res.status(200).json({ message: "Order saved successfully", order: newOrder });
  } catch (err) {
    console.error("Error saving order:", err);
    return res.status(500).json({ error: "Failed to save order", details: err.message });
  }
});


app.get("/getorders", async (req, res) => {
  console.log("Recieved Api request");
  try {
    const token = req.cookies.token;

    if (!token) {
      console.log("Token Not found");
      return res.status(401).json("Token Not Found");
    }

    let userid;

    jwt.verify(token, process.env.TOKEN_KEY, async (err, payload) => {
      if (err) {
        console.log(err);
        return res.status(401).json("Token Not Valid");
      } else {
        userid = payload.id;
        console.log(payload.id);
      }
    });

    const orders = await OrdersModel.find({ user: userid }).populate("user");

    if (!orders) {
      return res.json(401).json("No Orders Found");
    }

    return res.status(200).json({ message: orders });
  } catch (err) {
    console.error("Error fetching order:", err); // ✅ Log the error to see details
    res
      .status(500)
      .json({ error: "Failed to get order", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
