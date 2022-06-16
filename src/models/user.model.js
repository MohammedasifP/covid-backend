const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')

const userSchema=new mongoose.Schema({
   name:{type:String,required:true},
   lastname:{type:String,required:true},
   email:{type:String,required:true},
   password:{type:String,required:true},
   number:{type:Number,required:true}
},{
   versionKey:false,
   timestamps:true
})

userSchema.pre('save',async function(next){
  const hash=await bcrypt.hash(this.password,8);
        this.password=hash;
        next();
})

userSchema.methods.checkPassword=function(password){
     return 
}
const User=mongoose.model('user',userSchema);