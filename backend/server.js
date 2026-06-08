import express from 'express';
import connectDB from './src/config/db.js'
import 'dotenv/config';
import router from './src/routes/user.route.js';

const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.json())
app.use("/api/users",router)


connectDB();

// app.get("/", (req,res) =>{
//     res.send("Server is ready");
// })


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    
})