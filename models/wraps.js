let wrapsSchema = new Schema({
    title: String,
});
module.exports = mongoose.model('Wraps', wrapsSchema);
