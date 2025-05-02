const mysql=require('mysql2');
require('dotenv').config();

const db=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_Name
})

db.connect((err)=>{
    if(err){
        console.error('Mysql connection err',err);
        process.exit(1);  
    }

    console.log('Database connected');
    
})


module.exports=db;