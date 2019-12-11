let comboMenuSchema=new Schema({    
    title:String,
    configurable:Boolean,
    specials_id:[ObjectId],
    user_id:ObjectId
})
module.exports = mongoose.model('specials-menu',comboMenuSchema);