let specialSchema=new Schema({    
    title:String,
    image:String,
    price:Number,
    productids:[ObjectId]
})
module.exports = mongoose.model('special', specialSchema);