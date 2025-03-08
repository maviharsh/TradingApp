const {UserModel} = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  console.log("Signup request received:", req.body); // Log request body
  try {
    
    const { email, username, password } = req.body;
 
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required." });
    }
   
    console.log(password);
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", email);
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({username:username,  email:email , password:hashedPassword })

    try{
      await user.save();

      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
  
      res.status(200).json({
        success:true , 
        message:"user created successfully"
      })
    }
    catch(error)
    {
      console.error("Error during signup:", error); // Log error
       res.status(500).json({ message: "Server error", error: error.message });
    }
  }
  catch (error) {
    console.error("Error during signup:", error); // Log error
    res.status(500).json({ message: "Server error", error: error.message });
  }

  

}
module.exports.Login = async (req, res) => {
  console.log("Login request received:", req.body); // Log request body
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await UserModel.findOne({ email:email });
    if (!user) {
      console.log("User not found:", email);
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    // Correct way to compare hashed password
    const auth = await bcrypt.compare(password, user.password);
    console.log("Entered Password:", password, "Stored Hash:", user.password);
    if (!auth) {
      console.log("Password mismatch for user:", email);
      return res.status(400).json({ message: 'Incorrect email or password' });
    }

    const token =createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    console.log("User logged in successfully:", user);
    
    res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Error during login:", error); // Log error
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


module.exports.Logout = async (req, res) => {
  console.log("Logout request received:"); // Log request body
  try {
    
    res.clearCookie("token","",{withCredentials:true});

    console.log("User logged out successfully");
    
    res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Error during logout:", error); // Log error
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

