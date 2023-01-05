const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String, // имя — это строка
    required: true, // оно должно быть обязательно у каждой карточки
    minlength: 2, // минимальная длина имени — 2 символа
    maxlength: 30, // а максимальная — 30 символов
  },
  link: {
    type: String, // ссылка — это строка
    required: true, // оно должно быть у каждого пользователя, так что имя — обязательное поле
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: Array,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Card', cardSchema);
