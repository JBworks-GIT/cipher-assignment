require("dotenv").config();
const express = require("express");
require("./config/db.js");
const app = express();
const authRouter = require("./router/authRouter.js")
const cors = require("cors");
const questionRouter  = require("./router/questionRouter.js");
app.use(express.json());

app.use(cors({origin:true}));
app.get("/",(req,res)=>{
  res.send("app is running");
})
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/questions", questionRouter);


app.listen(process.env.PORT,()=>{
  console.log(`------------------ App Listening at ${process.env.PORT} ---------------`);
})