var clc = require("cli-color");

console.log(clc.green("Mensagem em verde"));

var funcoes = require("./funcoes.js");
var resultado = funcoes.validar("joel", "123");
console.log(resultado);