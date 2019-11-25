let productSchema=new Schema({    
    title:String,
    price:Number,   
    image:String,
    sizable:Boolean,
    customizable:Boolean,
    special_menu_ids:[ObjectId],
    special_ids:Array,
    selected_ids:Array,
    menu_ids:Array,
    sizes:Array,
    size:Object,
    user_id:ObjectId,
    orders:{
        type:Number,
        default:0
    }
})
module.exports = mongoose.model('product', productSchema);