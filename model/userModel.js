const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

//Define a schema
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstname: {
		type: String,
		trim: true,		
		required: true,
	},
	lastname: {
		type: String,
		trim: true,		
		required: true,
	},
	username: {
		type: String,
		trim: true,
		required: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	}
});

UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});


module.exports = mongoose.model('User', UserSchema);

