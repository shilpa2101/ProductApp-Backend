const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
            "name":String, 
            "productid":String,
            "price":String,
            "description":String,
            "suppliername":String
    }
)
let productmodel=mongoose.model("product",schema);
module.exports={productmodel}