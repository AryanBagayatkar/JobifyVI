const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  companyName: { type: String, required: true },
  salary: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  skills: { type: String, required: true },
  perks: { type: String, required: true },
});

module.exports = mongoose.model("Job", JobSchema);