const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

//localfile upload handler function
exports.localFileUpload = async (req,res)=>{
    try{
        const file = req.files.file;
        console.log("file aagya bro" ,file);
        
        //create path where file need to be stored on server 
        const path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("path->", path);
        
        // add path to the move function
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

function isFileTypeSupported(type, supportedTypes){
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder){
    const options = {folder};
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}

exports.imageUpload = async (req,res) => {
    try{
        //data fetch
        const {name, tags, email} = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedTypes = ["jpg","jpeg","png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if(!isFileTypeSupported(fileType, supportedTypes)){
            return res.status(400).json({
                success:false,
                message:'File format not supported',
            })
        }

        //file format supported
        const response = await uploadFileToCloudinary(file,"Images");
         console.log(response);


        // save intry into the database
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl:response.secure_url,
        }) 

        res.json({
            success:true,
            meassage:'Image Uploaded Successfully',
            imageUrl:response.secure_url
        })
 
    }catch(error){
        console.log(error); 
        res.json({
            success:false,
            meassage:'something went wrong',
        })
    }
}


//similar function for video upload