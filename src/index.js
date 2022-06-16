const express=require('express');
const mongoose=require('mongoose');
      require('dotenv').config()

const app=express();
const connect=()=>{
    mongoose.connect("mongodb+srv://asif:asif_456@cluster0.ep2by.mongodb.net/outh?retryWrites=true&w=majority")
}



app.listen(process.env.PORT || 5500,async()=>{
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.log(error.message)
    }
})
