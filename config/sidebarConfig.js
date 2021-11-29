const SpringCloud = require('./sidebar/SpringCloud.js');
const LeetBook = require('./sidebar/LeetBook.js');
const Redis = require('./sidebar/Redis.js');
const ElasticSearch = require('./sidebar/ElasticSearch.js');
const RabbitMQ = require('./sidebar/RabbitMQ.js');

module.exports = {
  '/SpringCloud/': SpringCloud,
  '/LeetBook/': LeetBook,
  '/Redis/': Redis,
  '/ElasticSearch/': ElasticSearch,
  '/RabbitMQ/': RabbitMQ,
  // '/Docker/' : Docker,
  '/': ['']
}