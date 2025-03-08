const {Schema, default: mongoose}=require("mongoose");

const UserSchema=new Schema({
     email:{
        type:String,
        required:[true,"Email address is required"],
      },
     username:{
         type:String,
         required:[true,"Username is required"],
     },
     password:{
          type:String,
          required:[true,"Password is required"],
     },
     createdAt: {
      type: Date,
      default: new Date(),
    },
    orders:{
      type:mongoose.Schema.Types.ObjectId,ref:"order"
    }
});

// UserSchema.pre("save",async function (){
//    this.password=await bcrypt.hash(this.password,10);  
// });

module.exports={UserSchema};