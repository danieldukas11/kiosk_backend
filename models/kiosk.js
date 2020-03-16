let kioskSchema=new Schema({ 
    kioskVideo:String,   
    user_id:ObjectId
})
module.exports = mongoose.model('kiosk', kioskSchema);