const express=require('express');
const router=express.Router();
const userController=require('../controller/userController');
const multer=require('multer');
const {storage}=require('../cloudinary/index');
const upload=multer({storage})


/* ===================USER================================ */
router.post('/sign-up',userController.postSignup)
router.post('/login',userController.postLogin);

router.post('/img/:uid',upload.array("img"),userController.uploadingImage)
router.get('/img/:uid',userController.getImg)
// router.get('/single/img/:uid/:img_id',userController.getSingleImg)   
router.put('/img/:uid',upload.array("img"),userController.putImg);
router.delete('/img/:uid/:img_id',userController.deleteImgApi);


module.exports=router