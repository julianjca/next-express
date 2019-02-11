const mongoose = require('mongoose');

const exampleSchema = mongoose.Schema({
  name: String,
  email: String,
  created: { type: Date, default: Date.now }
}, { collection: 'example-collection', strict: false });

module.exports = mongoose.model('exampleSchema', exampleSchema);
