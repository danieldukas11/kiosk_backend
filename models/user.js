let userSchema=new Schema({   
    firstName:String, 
    lastName:String,
    userName:String,
    email:String,
    password:String,
    role:String,
})
module.exports = mongoose.model('user', userSchema);