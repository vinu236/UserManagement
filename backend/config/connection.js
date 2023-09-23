require('dotenv').config()
const mongoose=require('mongoose');

mongoose.set('strictQuery', false);
const CONNECT=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connected successfully")
    } catch (error) {
        console.log(error)
    }
}


module.exports=CONNECT;