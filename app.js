const express=require('express');

const app=express();
require('dotenv').config();
const db=require('./models/db');
const productRoutes=require('./routes/productRoutes')

const PORT=process.env.PORT;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Basic setup done");
})

app.use('/api', productRoutes);

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})