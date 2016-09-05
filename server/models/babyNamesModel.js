var mongoose = require('mongoose');

var Names = new mongoose.Schema({
	name: { type: String, required: true },
	frequency: { type: Number },
	sex: { type: String, required: true }
});

module.exports = mongoose.model('Names', Names);