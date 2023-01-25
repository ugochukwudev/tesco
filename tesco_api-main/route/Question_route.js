const express = require("express");
const {
  create_question,
  getall_question,
  delete_question,
  edit_questions,
} = require("../controller/Question_controller");
const Question_Router = express.Router();

Question_Router.post("/create-question", create_question);
Question_Router.get("/question", getall_question);
Question_Router.delete("/question/:id", delete_question);
//edit route to be used after controller is created
Question_Router.put("/edit-question", edit_questions);
module.exports = Question_Router;
