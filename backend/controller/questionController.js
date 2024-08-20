const { Question } = require("../model/questionModel.js");

// Create a new question
const createQuestion = async (req, res) => {
  try {
    const { question, choices, difficulty, category } = req.body;

    // Check if at least one choice has the value field set to true
    const hasCorrectChoice = choices.some((choice) => choice.value === true);
    if (!hasCorrectChoice) {
      return res
        .status(400)
        .json({ error: "At least one choice must be marked as correct" });
    }

    const newQuestion = new Question({
      question,
      choices,
      difficulty,
      category,
    });

    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get questions by category
const getQuestionByCategory = async (req, res) => {
  try {
    const category = req.query.category;

    const questions = await Question.find({ category });
    if (questions.length === 0) {
      return res
        .status(404)
        .json({ error: "No questions found for this category" });
    }
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a question
const updateQuestion = async (req, res) => {
  try {
    const { question, choices, difficulty, category } = req.body;

    // Check if at least one choice has the value field set to true
    const hasCorrectChoice = choices.some((choice) => choice.value === true);
    if (!hasCorrectChoice) {
      return res
        .status(400)
        .json({ error: "At least one choice must be marked as correct" });
    }

    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { question, choices, difficulty, category },
      { new: true }
    );
    if (!updatedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json(updatedQuestion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a question
const deleteQuestion = async (req, res) => {
  try {
    const deletedQuestion = await Question.findByIdAndDelete(req.params.id);
    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }
    res.status(200).json({ message: "Question deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all the functions
module.exports = {
  createQuestion,
  getAllQuestions,
  getQuestionByCategory,
  updateQuestion,
  deleteQuestion,
};
