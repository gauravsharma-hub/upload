require('./userModel');
const mongoose=require('mongoose');
var Picture=mongoose.Schema({

    
    photo: {
        type:Array
    },

    uploaddate:{
        type:Date,"default":Date.now()
    }
});



mongoose.model('imagedata',Picture);