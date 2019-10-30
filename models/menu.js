let menuSchema=new Schema({    
    title:String,
    image:String,
    productids:[ObjectId]
})
module.exports = mongoose.model('menu', menuSchema);