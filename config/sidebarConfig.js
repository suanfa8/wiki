const SpringCloud = require('./sidebar/SpringCloud.js');
const LeetBook = require('./sidebar/LeetBook.js');
const Redis = require('./sidebar/Redis.js');

module.exports = {
  '/SpringCloud/': SpringCloud,
  '/LeetBook/': LeetBook,
  '/Redis/': Redis,
  '/': ['']
}