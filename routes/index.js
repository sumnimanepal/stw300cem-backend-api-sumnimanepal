var express = require('express');
var router = express.Router();

var taskController = require('../controller/taskController');
var userController = require('../controller/userController');




// Contact routes
router.route('/tasks')
    .get(taskController.index)
    .post(taskController.new);

router.route('/tasks/:task_id')
    .get(taskController.view)
    .patch(taskController.update)
    .put(taskController.update)
.delete(taskController.delete);



// // User routes
// router.route('/user')
//     .get(userController.index)
//     .post(userController.new);

// router.route('/user/:task_id')
//     .get(taskController.view)
//     .patch(taskController.update)
//     .put(taskController.update)
// .delete(taskController.delete);

/* GET home page. */
// get request
router.get('/data', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESTHub',});
});
//post request
router.post('/data', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // console.log("wtf");
  console.log(req.body);
  res.json({
    status: 'post request',
    message: 'Welcome to RESTHub',});
});

//put request
router.put('/data/:id', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    status: 'put request',
    message: 'Welcome to RESTHub',});
});

//delete request
router.delete('/data/:id', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.json({
    status: 'delete request',
    message: 'Welcome to RESTHub',});
});

module.exports = router;
