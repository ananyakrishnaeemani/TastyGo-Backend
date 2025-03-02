const express =require("express");
const dotEnv =require('dotenv');
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const path = require('path');

const app=express()
app.use(cors())

const PORT = process.env.PORT || 4000;
dotEnv.config();
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Mongo db connected successfully"))
.catch((error)=>console.log(error))

app.use(bodyParser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm',firmRoutes);
app.use('/product',productRoutes);
app.use('/uploads',express.static('uploads'));


app.listen(PORT,()=>{
    console.log(`server started and running at ${PORT}`);
});

app.use('/',(req,res)=>{
    res.send("Welcome to TastyGo");
})

// S0JhxxiE3TIrIBgg
// ananyakrishna
// mongodb+srv://ananyakrishna:<db_password>@cluster0.n0pcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZW5kb3JJZCI6IjY3YjgxMTM4MWM5OTY0MTc3MjY2MjBkNSIsImlhdCI6MTc0MDExOTI5MywiZXhwIjoxNzQwMTIyODkzfQ.4VcYyukVNH75T2nRhZjqjP7OayuluJpYjsuCKKZX3W0
