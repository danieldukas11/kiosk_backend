let comboMenuSchema=new Schema({    
    title:String,
    configurable:Boolean,
    specials_id:Array,
    user_id:ObjectId
})
module.exports = mongoose.model('specials-menu',comboMenuSchema);