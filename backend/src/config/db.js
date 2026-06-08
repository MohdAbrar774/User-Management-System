import mongoose from 'mongoose'


const connectDB = ()=>{

     mongoose.connect(process.env.MONGO_URI)

     .then(()=>{
        console.log("Server is connect to DB");
        
     })
     .catch((err)=>{
        console.log("Faiied to connect to DB");
        process.exit(1);
     })




}


export default  connectDB