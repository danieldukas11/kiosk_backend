let productSchema=new Schema({    
    title:String,
    price:Number,   
    image:String,
    sizable:Boolean,
    customizable:Boolean,
    special_menu_ids:[ObjectId],
    special_ids:[ObjectId],
    selected_ids:[ObjectId],
    menu_ids:[ObjectId],
    sizes:Array,
    size:Object,
    user_id:ObjectId,
    orders:{
        type:Number,
        default:0
    }
})
module.exports = mongoose.model('product', productSchema);