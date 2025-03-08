const {UserSchema}=require("../schemas/UserSchema");
const {model}=require("mongoose");


const UserModel=model("UserModel",UserSchema);

module.exports={UserModel};
