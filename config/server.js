var express = require('express'); // retorna uma função
var consign = require('consign');
var bodyParser = require("body-parser");
var expressValidator = require("express-validator");
var app = express(); // chamada da função que o modulo retorna
app.set("view engine", "ejs"); // motor de geração de views
app.set("views", "./app/views");

// bodyparser implementado como middleware
// permite o uso de json como retorno, json sendo transitado na aplicação
app.use(bodyParser.urlencoded({ extended: true }));
// incluido como middleware
app.use(expressValidator());

// faz o scan das pastas de routes e joga todos os modulos que 
// acabou de reconhecer para app/express, ou seja, dentro do servidor
// tambem importa o modulo dentro do diretorio config e esta declarado explicitamente
consign()
	.include("app/routes")
	.then("config/dbConnection.js")
	.then("app/models")
    .then("app/controllers")
	.into(app);

module.exports = app;