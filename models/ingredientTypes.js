let ingrSchema=new Schema({    
    title:String, 
    image:String ,  
    price:Number,
    double_price:Number,
    ingredient_ids:[ObjectId],
    default_ids:[ObjectId],
    user_id:ObjectId
})
module.exports = mongoose.model('ingredient_type', ingrSchema);