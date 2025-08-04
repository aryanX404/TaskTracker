const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./config/connection')
const router = require('./route/userRoute')


dotenv.config();
connectDB();
const app = express();

//middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//handle routing
app.use('/', router)


app.listen(process.env.PORT, ()=>{
    console.log ('Backend Server Started');
} )