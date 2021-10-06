//importação das dependencias do sqlite3
const sqlite3 = require('sqlite3').verbose();
// Criar objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db");

//Utilizar o objeto de banco de dados para as operações


module.exports.db;
/*
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS project (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            description TEXT,
            first_item_dot TEXT,
            first_item_name TEXT,
            second_item_dot TEXT,
            second_item_name TEXT,
            url TEXT
        );
    `)

    const query = `
        INSERT INTO project (
            image,
            name,
            description,
            first_item_dot,
            first_item_name,
            second_item_dot,
            second_item_name,
            url
        ) VALUES ( ?, ? ,?, ?, ?, ?, ?, ? );
    `;

    const values = [
        "",
        "Web Portfolio",
        "Purple",
        "PHP",
        "Yellow",
        "Javascript",
        "https://github.com/lucianolima00?tab=repositories"
    ];

    db.run(query, values, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    });

    db.all(`SELECT * FROM project`, function(err, rows){
        if (err) {
            return console.log(err);
        }

        console.log("Registros:")
        console.log(rows)
    })
})*/
