const knexSqLite = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './DB/sql_proyect.sqlite'
    },
    useNullAsDefault: true
})

module.exports = { knexSqLite };