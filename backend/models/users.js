const {Schema,model}=require('mongoose')



const userSchema=new Schema({

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    password:{
        type:String,
        required:true,
        trim:true
    },
    
    auth:{
        type:Boolean,
        default:false
    },
    images: [
        {
          url: String,
          title:{
            type:String,
            required:false
          }
        }
      ]

});


module.exports=model('Users',userSchema);