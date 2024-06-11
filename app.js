const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const product=require("./models/product")

const app=express()

app.use(cors())
app.get("/add",(req,res)=>{
    res.send("add")
})

app.post("/delete",(req,res)=>{
    res.send("delete")
})

app.post("/search",(req,res)=>{
    res.send("search")

})

app.post("/view",(req,res)=>{
    res.send("view")
})

app.listen(8083,()=>{
    console.log("server saved")
})