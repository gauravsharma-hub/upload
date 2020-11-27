const express=require('express');
const imgupload=require('../controllers/uploadController');
const router=express.Router();


/*To upload an image */

router.route('/file').post(imgupload.uploadfile);
router.route("/displayAll").get(imgupload.viewall);

module.exports=router;  