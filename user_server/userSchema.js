const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true }
}, {
  // Specify the collection name explicitly
  collection: 'user'
});

module.exports = mongoose.model('User', userSchema, 'user');
