const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload", Upload);

require("./config/database").dbConnect();


app.get("/",(req,res)=>{
    res.send(`<h1>This is homepage`);
});

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
});
