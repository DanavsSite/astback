const mongoose = require('mongoose')
const Types = mongoose.Schema.Types;
const page = new mongoose.Schema(
	{
		name: { type: Types.String, required: true },
        id:{type:Types.ObjectId,required:true},
        code:{type:Types.String},
	},
	{ collection: 'user-pages' }
)

const model = mongoose.model('page', page)

module.exports = model
