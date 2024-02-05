const express= require ('express');
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");
require('dotenv').config();
const app =express(); 
app.use(express.json());




app.get('/',(req,res)=>{
    res.send("server is successfully runung ");
    
})

const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authMiddleware');

// Register routes
app.use('/', authRoutes);

// Protected route using middleware to verify JWT
app.get('/data', authenticateToken, (req, res) => {
  res.json({ message: 'Protected data accessed successfully', user: req.user });
});


const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.DATABASE_URL);

const conn = mongoose.connection;
conn.on("open", function () {
  console.log("connected...");
});


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
    
})  