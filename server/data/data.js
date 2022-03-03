const database = require ('../infra/database');

exports.getBooks = function () {
    return database.query('select * from books');

};