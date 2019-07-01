var mongoose =require('mongoose');
var taskSchema =mongoose.Schema({
    task_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        auto: true
    },
    task_name:{
        type:String,
        required:true
    },
    task_created:{
        type:Date,
        default: Date.now
    },
    due_date:{
        type:String,
        required:true
    },
    due_time:{
        type:String,
        required:true
    },
    task_status:{
        type:Boolean,
        required:true
    }
});
// Export Contact model
var Task=module.exports=mongoose.model('task',taskSchema);


module.exports.get = function (callback, limit) {
    Task.find(callback).limit(limit);
}