const File = require("../models/File");

//localfile upload handler function
exports.localFileUpload = async (req,res)=>{
    try{
        const file = req.files.File;
        console.log("file aagya bro" ,file);

        const path = __dirname + "/files/" + Date.now();

        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"local file uploaded successfully"
        })

    }catch(error){
        console.log(error);
    }
}