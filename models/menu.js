let menuSchema=new Schema({    
    title:String,
    user_id:ObjectId,
    hidden:Boolean,
    order:Number
})
module.exports = mongoose.model('menu', menuSchema);