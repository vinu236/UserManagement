require('dotenv').config()
const express=require('express');
const app=express();
const userRoutes=require('./routes/userRoutes');
const os=require('os');
const cors=require('cors');
const DB=require('./config/connection')
const errorHandler=require('../backend/middleware/errHandler')


console.log(os.hostname())


const corsOptions = {
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  };
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(userRoutes)
app.use(errorHandler)

app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
});

DB();