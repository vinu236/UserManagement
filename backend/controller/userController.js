const User=require('../models/users');
const bcrypt=require('bcrypt');
const jwtToken=require('../middleware/auth')


exports.postSignup=async(req,res,next)=>{

    try {
        const{email,password}=req.body;
        const userCheck=await User.findOne({email});

            if(userCheck){
                const err=new Error('User with this Email already Exist');
                err.status=409;
                return next(err)
            }
            const hashPassword=await bcrypt.hash(password,10);

            const createUser=await User.create({
                email,
                password:hashPassword
            });

            res.status(201).json({message:"SuccessFully created"})


    } catch (err) {
        next(err)
    }
}

exports.postLogin=async(req,res,next)=>{
    try {
        const{email,password}=req.body;
        const userCheck=await User.findOne({email});
        console.log(userCheck)

        if(!userCheck){
            const err=new Error("Invalid User name or Password");
            err.status=404;
           return next(err)
        }
        const matchPassword=await bcrypt.compare(password,userCheck.password);
        if(!matchPassword){
            const err=new Error('Invalid User name or Password');
            err.status=404;
            return next(err);
        }

        //generating Access Token
        const accessToken=jwtToken.generateAccessToken(userCheck);
            console.log(accessToken)
        res.status(200).json({
            uid:userCheck._id,
            email:userCheck.email,
            authToken:accessToken
        })
    } catch (error) {
        console.log("hello")
       return next(error)
    }
}

exports.uploadingImage=async(req,res,next)=>{
    try {
    
    const {uid}=req.params;
    const newImages=req.files;
    const title=Array.isArray(req.body.title);
    const text=req.body.title;
    const newData=newImages.map((image,index)=>({url:image.path,title:`${title ? text[index] : text}`}))

    const user=await User.findOne({_id:uid})

    if(!user) {
        const err=new Error("User not Found !");
        err.status=404;
        return next(err)
    }
    const data=await User.updateMany({_id:uid},{$push:{images:{$each:newData}}})

    res.status(201).json({message:'Successfully created new Image   '})

    } catch (err) {
       return next(err);
       
    }
}

exports.editUploadedImage=async(req,res)=>{ 
    try {
        const {id}=req.params

        const image=await User.findOne({id});
        if(!image){
            const err= new Error("Not found");
            err.status=404;
            return next(err)
        }

        const data=await User.updateOne({_id:id,images:{$elemMatch:{_id:img_id}}},{$set:{
            url:req.body,
            title:req.body

        }})


    } catch (error) {
        console.log(error)
    }
}  


exports.getImg=async(req,res,next)=>{
    try {
        const {uid}=req.params;
        console.log("**********************")
        console.log(uid);
        console.log("**********************")


        if(!uid){
            const err= new Error("Not found");
            err.status=404;
            return next(err)
        }
            
        const data=await User.findOne({_id:uid},{images:1});
            res.status(200).json(data)
   

    } catch (error) {
        return next(error);
    }
}


exports.putImg=async(req,res,next)=>{
    try {

    const hasPath=req.body.img?.startsWith('https');
    const {img_id,title}=req.body
    const uid=req.params.uid;
    if(!uid){
        const err= new Error("Not found");
        err.status=404;
        return next(err)
    }
    let imgPath=hasPath ? req.body.img :req.files[0].path
    
    const user=await User.findOne({_id:uid});

    if(!user){
            const err= new Error("Not found");
            err.status=404;
            return next(err)
        }
       
        const data=await User.findOne({_id:uid ,images:{$elemMatch:{_id:img_id}}});

        
       
        
        const update = await User.updateOne(
            { _id: uid, "images._id": img_id },
            { 
              $set: { 
                "images.$.url": imgPath,
                "images.$.title": title
              }
            }
          );
        
            res.status(200).json(update)


    } catch (error) {
        return next(error)
    }
}

exports.deleteImgApi =async(req,res,next)=>{
    try {

        const{uid,img_id}=req.params;
        const user=await User.findOne({_id:uid});
       
    if(!user){
        const err= new Error("Not found");
        err.status=404;
        return next(err)
    }
    const delete_Img = await User.updateOne(
        { _id: uid },
        { $pull: { images: { _id: img_id } } }
      );
      console.log(delete_Img)
    
    res.status(200).json({message:"Successfully deleted"});

    } catch (error) {
            return next(error)
    }
}

exports.updateController=async(req,res,next)=>{
    try {
            // console.log(req.params);
            const {uid}=req.params;
            const {oldPassword , newPassword}=req.body;
            console.log("old password is =>>>>>>>>>>>>>>>",oldPassword);
            console.log("NEW PASS",newPassword)

        const userCheck =await User.findOne({_id:uid})
            
        if(!userCheck){
            const err= new Error("Not found");
            err.status=404;
            return next(err)
        }
        const matchPassword=await bcrypt.compare(oldPassword,userCheck.password);
        console.log(matchPassword)
        if(!matchPassword){
            const err=new Error('Invalid Password');
            err.status=404;
            return next(err);
        }


        const hashPassword=await bcrypt.hash(newPassword,10);

        console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

                // console.log("=================")

                const updatePassword=await User.updateOne({_id:uid},{$set:{password:hashPassword}});
                console.log(updatePassword);
                res.status(200).json({message:"Successfully updated"})
    } catch (error) {

        return next(error)
    }
}

exports.reOrderController=async(req,res,next)=>{
    try {
        const {uid}= req.params;
        const reArrangedImage=req.body
        console.log("uid is =>>>>>>>",uid)
        console.log(req.body);
        const 
    } catch (error) {
        return next(error)
    }
}