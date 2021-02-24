const TodoList = require("../models/TodoList");
const MyError = require("../utils/myError");
const asyncHandler = require("../middleware/asyncHandler");

exports.getTodoLists = asyncHandler(async (req, res, next) => {
	let query;

	if (req.params.categoryId) {
		query = TodoList.find({ category: req.params.categoryId });
	} else {
		query = TodoList.find().populate({
			path: "category",
			select: "name averagePrice",
		});
	}

	const TodoLists = await query;

	res.status(200).json({
		success: true,
		count: TodoLists.length,
		data: TodoLists,
	});
});

exports.getTodoList = asyncHandler(async (req, res, next) => {
	const TodoList = await TodoList.find({ _id: req.params.id });
	if (!TodoList) {
		throw new MyError(req.params.id, 404);
	}

	res.status(200).json({
		success: true,
		data: TodoList,
	});
});












exports.createTodoList = asyncHandler(async (req, res, next) => {
	
	const category = await Category.findById(req.body.category);

	if (!category) {
		throw new MyError(req.body.category + " id tai nom baihgui bna", 404);
	}

	const TodoList = await TodoList.create(req.body);

	res.status(200).json({
		success: true,
		data: TodoList,
	});
});