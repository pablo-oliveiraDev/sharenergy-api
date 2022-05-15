const pgp =require('pg-promise')();
const db = pgp({
    user:'admin',
    password:'admin12345',
    host:'localhost',
    port: 5432,
    database: 'testeSharenergy'
});

module.exports= db;