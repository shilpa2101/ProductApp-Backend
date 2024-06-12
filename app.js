const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {productmodel}=require("./models/product")

const app=express()

app.use(cors())
app.use(express.json());

mongoose.connect("mongodb+srv://shilpa:shilpa123@cluster0.qb2ryzy.mongodb.net/productapp?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add",(req,res)=>{
    let input=req.body
    // res.send("success")
    // console.log(input)

    let product=new productmodel(input)
    // console.log(product)
    // res.send("model passing success")

    product.save()

    res.json({"status":"success"})   
   
})


// app.post("/delete",(req,res)=>{
//     res.send("delete")
// })

// app.post("/search",(req,res)=>{
//     res.send("search")

// })

app.post("/view",(req,res)=>{
    productmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8087,()=>{
    console.log("server saved")
})