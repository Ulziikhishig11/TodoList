const User = require("../models/User");
const MyError = require("../utils/myError");
const asyncHandler = require("../middleware/asyncHandler");
// const paginate = require("../utils/paginate");

exports.register = asyncHandler(async (req, res, next) => {
	const user = await User.create(req.body);

	const token = user.getJsonWebToken();

	res.status(200).json({
		success: true,
		token,
		user: user,
	});
});

exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	if (!email || !password) {
		throw new MyError("email bolon nuuts ugee damjuulna uu", 400);
	}

	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		throw new MyError("email bolon nuuts ugee zov oruulna uu", 401);
	}

	const ok = await user.checkPassword(password);
	if (!ok) {
		throw new MyError("email bolon nuuts ugee zov oruulna uu", 401);
	}

	res.status(200).json({
		success: true,
        login: true,
		token: user.getJsonWebToken(),
		user: user,
	});
});
