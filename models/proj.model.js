const mongoose = require('mongoose')
const Types = mongoose.Schema.Types;
const Project = new mongoose.Schema(
	{
		name: { type: Types.String, required: true },
        user:{type:Types.ObjectId,required:true},
        type:{type:Types.String,required:true},
        code:{type:Types.String},
        pages:{type:Types.Array}
	}
)

const model = mongoose.model('Project', Project)

module.exports = model
