const { userModel } = require("../model/userModel");
const jwt = require("jsonwebtoken");

const getUserByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};


const generateJWTToken = (obj) => {
  const token = jwt.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 100, //in seconds
      data: obj,
    },
    process.env.JWT_SECRET_KEY
  );
  return token;
};
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Invalid password or email",
        data: {},
      });
      return;
    }
    const user = await getUserByEmail(email);
    if (user) {
      res.status(400).json({
        status: "fail",
        message: "user already exists",
        data: {},
      });
      return;
    }
    const newUser = await userModel.create({ name, email, password });
    res.status(201);
    res.json({
      status: "success",
      message: "user created",
      data: {
        user: {
          _id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
      data: {},
    });
  }
  // console.log("in progress. by signup controller");
  // res.send("in progress. by signup controller");
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Invalid password or email",
        data: {},
      });
      return;
    }
    const user = await getUserByEmail(email);
    if (!user) {
      res.status(400).json({
        status: "fail",
        message: "invalid user",
        data: {},
      });
      return;
    }

    const isCorrect = await user.verifyPassword(password, user.password);
    if (!isCorrect) {
      res.status(400).json({
        status: "fail",
        message: "Invalid Passeword",
        data: {},
      });
      return;
    }
    console.log("success");
    res.status(200);
    res.json({
      status: "success",
      data: {
        user: {
          email: user.email,
          _id: user._id,
          name: user.name,
        },
        token: generateJWTToken({ _id: user._id, email: user.email }),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Internal Server Error",
      data: {},
    });
  }
};
module.exports = { signup, login };
