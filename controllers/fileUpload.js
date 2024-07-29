const File = require("../models/File");

//localfile upload handler function
exports.localFileUpload = async (req,res)=>{
    try{
        const file = req.files.file;
        console.log("file aagya bro" ,file);

        const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;

        file.mv(path, (err)=>{
            console.log(err);
        });

        res.json({
            success:true,
            message:"local file uploaded successfully"
        })

    }catch(error){
        console.log("Not able to upload file on the server");
        console.log(error);
    }
}