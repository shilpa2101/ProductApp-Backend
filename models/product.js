const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
            "name":String, 
            "productid":String,
            "price":String,
            "description":String,
            "suppliername":String,
            "image":String
    }
)
let productmodel=mongoose.model("products",schema);
module.exports={productmodel}