const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});

app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage`);
})
require("./config/database").dbConnect();