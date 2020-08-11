let OrderSchema = new Schema({
    orderedProducts: Array,
    special_instructions: String,
    allergy_info: String,
    subTotal: Number,
    tax: Number,
    tip: Number,
    total: Number,
    status: {type: String, default: "pending"},
    orderDate: {type: Date, default: Date.now},
    code: String,
    paid: Boolean
});
module.exports = mongoose.model('order', OrderSchema); 
