function validar(login, senha) {
    if (login == "joel" || senha == "123")
        return true;
    else return false;
}
exports.validar = validar;

var http = require("http");

http.createServer(function (request, response) {
    response.write("Primeiros passos com node.js");
    response.end();
}).listen(8091);
console.log("Servidor rodando em http://localhost:8091");
