var mysql = require('mysql');

var connMySQL = function(){
		console.log("Conexao com o banco de dados foi estabelecida...");
		return  mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'portal_noticias'
		});
}

// evita que no momento do autoload a função seja executada, pois estara contida dentro de uma
// variavel, wrapper
module.exports = function(){
	console.log("O autoload carregou o modulo de conexao com o bd...");
	return connMySQL;
}