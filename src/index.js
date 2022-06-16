const express=require('express');
const mongoose=require('mongoose');
      require('dotenv').config()
const cors=require('cors');
const app=express();
      app.use(cors())
const connect=()=>{
    mongoose.connect("mongodb+srv://asif:asif_456@cluster0.ep2by.mongodb.net/covid?retryWrites=true&w=majority")
}
app.use(express.json())

const {register,login}=require('./controllers/user.controller')

app.post("/register",register)
app.post("/login",login)

app.listen(process.env.PORT || 5500,async()=>{
    try {
        await connect()
        console.log("listening on port 5500")
    } catch (error) {
        console.log(error.message)
    }
})
