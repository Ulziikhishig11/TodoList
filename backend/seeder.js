const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const TodoList = require("./models/TodoList");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
});

const TodoLists = JSON.parse(
	fs.readFileSync(__dirname + "/data/TodoList.json", "utf-8")
);

const importData = async () => {
	try {
		await TodoList.create(TodoLists);
		console.log("Өгөгдлийг импортлолоо....".green.inverse);
	} catch (err) {
		console.log(err);
	}
};

const deleteData = async () => {
	try {
		await TodoList.deleteMany();
		console.log("Өгөгдлийг бүгдийг устгалаа....".red.inverse);
	} catch (err) {
		console.log("err.red.inverse");
	}
};

if (process.argv[2] == "-i") {
	importData();
} else if (process.argv[2] == "-d") {
	deleteData();
}
