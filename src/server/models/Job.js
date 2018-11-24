const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    company: String,
    title: String,
    salary: String,
    location: String,
    responded: String,
    interview: String,
    accepted: String,
    offer: String
});

const Job = mongoose.model('jobs', jobSchema);

module.exports = Job;

