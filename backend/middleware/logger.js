const logger = (req, res, next) => {
	req.userId = "sgdsdgsdgsd";
	console.log(
		`${req.method} ${req.protocol}://${req.host}${req.originalUrl}`
	);
	next();
};

module.exports = logger;
