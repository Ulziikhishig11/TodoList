const errorHandler = (err, req, res, next) => {
	console.log(err.stack.cyan.bold);

	const error = { ...err };

	if (error.name === "CastError") {
		error.message = "ene id buruu butetstei baina";
		error.statusCode = 400;
	}
	if (error.code === 11000) {
		error.message = "ner davhardsan bna";
		error.statusCode = 400;
	}

	res.status(err.statusCode || 500).json({
		success: false,
		error,
	});
};
module.exports = errorHandler;
