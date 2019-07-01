Task = require('../model/taskModel');

// Handle index actions
exports.index = function (req, res) {
    Task.get(function (err, tasks) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Tasks retrieved successfully",
            data: tasks
        });
        // res.send(tasks);
    });
};  

// Handle create task actions
exports.new = function (req, res) {
    var task = new Task();
    task.task_name = req.body.task_name ? req.body.task_name : task.task_name;
    task.due_date = req.body.due_date;
    task.due_time = req.body.due_time;

    task.task_status=req.body.task_status;


    // save the task and check for errors
    task.save(function (err) {
        if (err)
            res.json(err);

        res.json({
            message: 'New task created!',
            data: task
        });
    });
};


// Handle view task info
exports.view = function (req, res) {
    Task.findById(req.params.task_id, function (err, task) {
        if (err)
            res.send(err);
        res.json({
            message: 'task details loading..',
            data: task
        });
    });
};

// Handle update task info
exports.update = function (req, res) {

    task.findById(req.params.task_id, function (err, task) {
        if (err)
            res.send(err);

        task.task_name = req.body.task_name ? req.body.task_name : task.task_name;
        task.due_date = req.body.due_date;
   

        // save the task and check for errors
        task.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'task Info updated',
                data: task
            });
        });
    });
};


// Handle delete task
exports.delete = function (req, res) {
    Task.remove({
        _id: req.params.task_id
    }, function (err, task) {
        if (err)
            res.send(err);

        res.json({
            status: "success",
            message: 'task deleted'
        });
    });
};
