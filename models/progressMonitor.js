let ProgressSchema=new Schema({ 
    adVideo:String,  
    from_chef_header:String,
    from_chef_text:String,
    user_id:ObjectId
})
module.exports = mongoose.model('progress_monitor', ProgressSchema);