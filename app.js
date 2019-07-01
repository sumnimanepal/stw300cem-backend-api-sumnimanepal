var createError = require('http-errors');
var express = require('express');
var path = require('path');
const users = require('./routes/users');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
const passport   = require('passport');

// app.use('*', cors({
//   origin: 'http://localhost:5500',
//   credentials: true
// }));


// Import Mongoose
let mongoose = require('mongoose');
var app = express();

app.set('secretKey', 'nodeRestApi'); // jwt secret token

// body parser a middleware

var bodyParser = require('body-parser');


// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// body parser(important to recieve json POST request)
app.use(bodyParser.json());


// app.use('/', indexRouter);
app.use('/users', usersRouter);
// Import routes
let apiRoutes = require("./routes/index")

// Use Api routes in the App
app.use('/api', apiRoutes)
app.use('/', apiRoutes)
  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// mongoose
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/taskdb');

var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.post('/Register', (req, res) => {

  User.findOne({ username: req.body.username }).then(function (user) {
    if (user) {
    } else {
      var users = new User(req.body);
      users.save();
      res.send("Register complete")

    }
  })
});


// console.log(req.body);
// const Users = await User.checkCrediantialsDb(req.body.username, req.body.password);
// if (Users) {
//   const token = await Users.generateAuthToken();
//   res.send({
//     token: token,
//     userdata: Users
//   });

//   //res.send({Users})
// } else {
//   res.json({
//     message: "Invalid login"
//   })
// }


// app.listen(process.env.port || 4000,function(){
//   console.log('listening on port 4000');
// });

module.exports = app;
