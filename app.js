const express = require('express');
const mongoose = require('mongoose');

// creating express app
const app = express();


// Handle CORS + middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE"); // If using .fetch and not axios
  res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// database connection
const uri = "mongodb+srv://admin:WLfLQOx7waRk71wH@cluster0.hicxvfw.mongodb.net/SheStaysDB?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connection has been established.")
  })
  .catch(err => console.log(err))


app.use(express.json())

// routes
app.get("/", (req, res) => {
  res.send("This is SheStays API.");
})

const AccomodationRoute = require('./routes/Accomodation');
app.use('/accomodations', AccomodationRoute)
const CommonRoute = require('./routes/Common');
app.use('/common', CommonRoute)
const AdminRoute = require('./routes/Admin');
app.use('/admin', AdminRoute)
const AMRoute = require('./routes/AreaManager');
app.use('/am', AMRoute)

// start server
app.listen(3000, () => {
  console.log("Listening at port 3000")
})