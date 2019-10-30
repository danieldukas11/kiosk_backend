let productSchema=new Schema({    
    title:String,
    cal:Number,
    price:Number,   
    image:String,
    ingredients:[Number],
    defaults:[Number] 
})
module.exports = mongoose.model('product', productSchema);