const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "hereglegchiin neriig oruulna uu"],
	},
	email: {
		type: String,
		required: [true, "hereglegchiin email hayagiig oruulna uu"],
		unique: true,
		match: [
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
			"email hayag buruu bna",
		],
	},
	role: {
		type: String,
		required: [true, "hereglegchiin erhiig oruulna uu"],
		enum: ["user", "operator"],
		default: "user",
	},
	password: {
		type: String,
		minlength: 4,
		required: [true, "nuuts ugee oruulna uu"],
		select: false,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

UserSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getJsonWebToken = function () {
	const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRESIN,
    });
    return token;
};

UserSchema.methods.checkPassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword, this.password);
}

module.exports = mongoose.model("User", UserSchema);
