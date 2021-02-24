const express = require("express");

const { getTodoLists, getTodoList, createTodoList } = require("../controller/TodoLists");

const router = express.Router({mergeParams: true});

//api/v1/TodoLists
router.route("/").get(getTodoLists).post(createTodoList);
router.route("/:id").get(getTodoList);

module.exports = router;
