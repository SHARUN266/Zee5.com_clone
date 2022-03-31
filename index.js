const express = require("express")
 
const connect = require("./configs/db")
 
const userController = require("./controller/user.controller")
// const passport = require("./configs/google-oauth")
 
const app = express()
const { register, login } = require("./controller/auth.controller")
app.use(express.json())
app.use("/users", userController)



app.post("/register", register)

app.post("/login", login)
 



// app.get("/auth/google",
//   passport.authenticate('google', { scope: ['profile'] }));
//   console.log("kalam")
 
// app.get("/auth/google/callback", 
//   passport.authenticate('google', { failureRedirect: '/login',session:false }),
   
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });




app.listen(6000, async () => {
  try {
    await connect()
    console.log("listening on port 6000")
  }
  catch (err) {
    console.log(err.message)
  }
})
