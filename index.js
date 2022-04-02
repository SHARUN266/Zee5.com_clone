const express = require("express");
const Cors = require("cors")
const connect = require("./configs/db");

const userController = require("./controller/user.controller");
 
const movieController = require("./controller/movie.controller");
const app = express();

const { register, login } = require("./controller/auth.controller");
app.use(express.json());
app.use("/users", userController);
app.use("/movies", movieController);
app.use(Cors())
app.post("/register", register);

app.post("/login", login);
 

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening on port 5000");
  } catch (err) {
    console.log(err.message);
  }
});
