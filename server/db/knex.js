// sets environment to be used by knex
const environment = process.env.NODE_ENV || 'development';
// configure knex environment to use environment type
const config = require('../config/knexfile.js')[environment];
// bring in the knex module and pass in our config tpe to setup the connection to the database.
module.exports = require('knex')(config);