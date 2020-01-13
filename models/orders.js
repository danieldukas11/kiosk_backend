
let OrderSchema=new Schema({    
    orderedProducts:Array,
    special_instructions:String,
    alergy_info:String,
    subTotal:Number,
    tax:Number,   
    tip:Number,
    total:Number,
    action:{ type : String, default: "pending" },
    orderDate:{ type : Date, default: Date.now },
    code:String,
    ispaid:Boolean
})
module.exports = mongoose.model('order', OrderSchema); 