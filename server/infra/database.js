const pgp = require('pg-promise')();
const db = pgp({
    user: 'zpefjozkqyineo',
    password: 'dc6cfb6a2b0e1ad15be4cdb92b94329f8c668e597242e53b7ade143614b39a07',
    host: 'ec2-3-229-161-70.compute-1.amazonaws.com',
    port: 5432,
    database: 'd1pe0ki03h6ig2'

});
module.exports = db;