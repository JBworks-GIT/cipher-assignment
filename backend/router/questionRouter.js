const express = require("express");
const { getAllQuestions, getQuestionByCategory, createQuestion, updateQuestion, deleteQuestion } = require ('../controller/questionController.js');

const questionRouter = express.Router();

// Questions routes
questionRouter.get('/show', getAllQuestions);
questionRouter.get('/show/category', getQuestionByCategory);
questionRouter.post('/create', createQuestion);
questionRouter.put('/update/:id', updateQuestion);
questionRouter.delete('/delete/:id', deleteQuestion);

module.exports = questionRouter;
