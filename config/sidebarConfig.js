const SpringCloud = require('./sidebar/SpringCloud.js');
const LeetBook = require('./sidebar/LeetBook.js');
const Redis = require('./sidebar/Redis.js');
const ElasticSearch = require('./sidebar/ElasticSearch.js');
const RabbitMQ = require('./sidebar/RabbitMQ.js');
const Blog = require('./sidebar/Blog.js');

module.exports = {
  "/SpringCloud/": SpringCloud,
  "/Redis/": Redis,
  "/RabbitMQ/": RabbitMQ,
  "/ElasticSearch/": ElasticSearch,
  "/Blog/": Blog,
  // "/LeetBook/": LeetBook,
  // "/Docker/" : Docker,
  "/": [""]
}