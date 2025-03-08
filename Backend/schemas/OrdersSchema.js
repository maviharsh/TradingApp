const {Schema, default: mongoose} =require("mongoose");

const OrdersSchema=new Schema({
    name: String,
      price: Number,
      qty: Number,
      mode: String,
      user:{type:mongoose.Schema.Types.ObjectId,ref:"UserModel"}
});

module.exports=OrdersSchema;