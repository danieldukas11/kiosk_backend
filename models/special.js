let specialSchema=new Schema({    
    title:String,
    image:String,
    price:Number,
    user_id:ObjectId
})
module.exports = mongoose.model('special', specialSchema);