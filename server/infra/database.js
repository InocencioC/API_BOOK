const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'Informatica1999',
    host: 'localhost',
    port: 5432,
    database: 'appbook'

});
module.exports = db;