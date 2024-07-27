const mongoose = require("mongoose");
require("dotenv");

const DB_URL = process.env.DB_URL;

exports.dbConnect = () =>{
    mongoose.connect(DB_URL)
    .then(()=>{
        console.log("db is connected");
    })
    .catch((error)=>{
        console.log("db is not connected");
        console.error(error.message);
        process.exit(1);
    })

}