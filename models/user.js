const mongoose = require('mongoose');

// Визначення схеми даних
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Перевірка унікальності електронної адреси
  },
  password: {
    type: String,
    required: true
  }
});

// Створення моделі на основі схеми
const User = mongoose.model('User', userSchema);

module.exports = User;
