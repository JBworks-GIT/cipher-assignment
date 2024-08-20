const mongoose = require("mongoose");
const { Schema } = mongoose;

const choiceSchema = new Schema(
  {
    text: { type: String, required: true },
    value: { type: Boolean, required: true },
  },
  {
    _id: false,
  }
);

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    choices: {
      type: [choiceSchema],
      required: true,
      validate: [
        {
          validator: function (choices) {
            return choices.length > 0;
          },
          msg: "At least one choice is required.",
        },
        {
          validator: function (choices) {
            const trueValues = choices.filter((choice) => choice.value === true);
            return trueValues.length === 1;
          },
          msg: "There must be exactly one correct answer.",
        },
      ],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    category: { type: String, required: true },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = { Question };
