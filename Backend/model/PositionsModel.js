const {model}=require("mongoose");
const PositionsSchema=require("../schemas/PositionsSchema");

const PositionModel=model("position",PositionsSchema);

module.exports={PositionModel};