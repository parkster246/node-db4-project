const knex = require('knex');

const config = require('./dbConfig.js');

module.exports = knex(config.development)