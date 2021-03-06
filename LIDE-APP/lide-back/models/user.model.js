const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: String,
    isProf: Boolean,
    projects: [],
});

const User = mongoose.model('User', user);

module.exports = User;