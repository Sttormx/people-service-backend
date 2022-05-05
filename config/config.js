require('dotenv').config()

const config = 
{
    'development': 
    {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_CONNECTION,
        "port": process.env.DB_PORT
    },

    "test": 
    {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_CONNECTION,
        "port": process.env.DB_PORT
    },

    "production": 
    {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": process.env.DB_CONNECTION,
        "port": process.env.DB_PORT
    }
}

module.exports = config