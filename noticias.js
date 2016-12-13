// apartir desta biblioteca cria um servidor e recebe requisições através de uma porta
// require importa um modulo, biblioteca, paginas
var http = require("http");

// é criado um servidor, funções como argumento, manda requisição e response
http.createServer(function (req, res) {

	// trabalha dentro do servidor
	// recupera a url
	var categoria = req.url;

	if (categoria=="/tecnologia")
		res.end("<html><body>Portal de noticias de tecnologia</body></html>");
	else if (categoria=="/moda")
		res.end("<html><body>Portal de noticias de moda</body></html>");
	else if (categoria=="/beleza")
		res.end("<html><body>Portal de noticias de beleza</body></html>");
	else
		res.end("<html><body>Portal de noticias</body></html>");
	// a linha acima passa uma resposta da requisição atraves do end()

}).listen(8091);
// a linha acima define a porta do servidor