const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// DATABASE CONNEXION
const pool = new Pool({
    //connectionString: process.env.DATABASE_URL
    user: "mamadoudiallo",
    database: "postgres",
    password: "password",
    port: 5432,
    host: "localhost",
});

pool.on('connect', () => {
    console.log('La connexion avec la Base De Données est établi avec succès !');
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};