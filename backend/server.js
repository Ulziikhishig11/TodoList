const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const rfs = require("rotating-file-stream");
const colors = require("colors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const logger = require("./middleware/logger");
const TodoListsRoutes = require("./routes/TodoLists");
const usersRoutes = require("./routes/users");

dotenv.config({ path: "./config/config.env" });

const app = express();

connectDB();

const accessLogStream = rfs.createStream("access.log", {
	interval: "1d",
	path: path.join(__dirname, "log"),
});

app.use(express.json());
app.use(logger);
app.use(morgan("combined", { stream: accessLogStream }));

// use functioniig ashiglaj turul buriin middleware uudiig ashiglaj bolno
app.use("/api/v1/TodoLists", TodoListsRoutes);
app.use("/api/v1/users", usersRoutes);

app.use(errorHandler);

const server = app.listen(
	process.env.PORT,
	// console.log(`express server ${process.env.PORT} deer aslaa`)
);
//  process.env dotor config uudiig avtomataar huulsan baidag

process.on("unhandledRejection", (err, promise) => {
	// console.log(`aldaa garlaa: ${err.message}`);
	server.close(() => {
		process.exit(1);
	});
});
