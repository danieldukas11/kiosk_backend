let terminalSchema=new Schema({   
    terminal_number:String,
    user_id:ObjectId
})
module.exports = mongoose.model('terminal', terminalSchema);