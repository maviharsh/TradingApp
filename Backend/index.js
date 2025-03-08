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
    console.error("Error saving order:", err); 
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

    const payload = await new Promise((resolve, reject) => {
      jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
        if (err) reject(err);
        else resolve(decoded);
      });
    });

    const userid = payload.id;
    console.log("User ID:", userid);

    const user = await UserModel.findById(userid);
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const newOrder = new OrdersModel({
      user: userid,
      name: req.body.name,
      price: req.body.price,
      qty: req.body.qty,
      mode: req.body.mode,
    });

    await newOrder.save();

    user.orders.push(newOrder._id);
    await user.save(); 

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
