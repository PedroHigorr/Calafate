const mysql = require('mysql');

const db = msql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'dbcalafate',
    multipleStatements: true
})

db.connect((erro) =>{
    if(erro){
        throw erro

    }
    console.log('Conectado ao DB!!!');
}
);

global.db = db;
module.exports = db;
