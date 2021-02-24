const mongoose = require("mongoose");
const { transliterate, slugify } = require("transliteration");

const TodoListSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "nomnii neriig oruulna uu"],
			unique: true,
			trim: true,
			maxlength: [250, "nomnii nernii urt deed tal ni 50 temdegt bna"],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

module.exports = mongoose.model("TodoList", TodoListSchema);
