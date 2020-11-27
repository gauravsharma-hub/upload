require ('../models/imgModel');

const mongoose=require('mongoose');
var imageUser=mongoose.model('imagedata');
const multer=require('multer');



const storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'./public/img');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }  
})
var upload=multer({storage:storage}).single('photo');

module.exports.uploadfile=(req,res)=>{
    upload(req,res,function(err){
        if(err)
        console.log("error in uploading file " +err);
        else
        {
            
          var imgdata=new imageUser();
          console.log(req.file);
          imgdata.photo=req.file.originalname;
         
            imgdata.save((err,docs)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    res.send(docs);
                }
            });
        console.log("File uploaded succesfully");
        }
    });
    };


    module.exports.viewall=function(req,res,next){
        imageUser.find((err,docs)=>{
                if(err)
                console.log(err);
                else
                res.send(docs);
            });
        };