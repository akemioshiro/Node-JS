module.exports = function(app){
	
	app.get('/noticia', function(req, res){
		// recupera o modulo que faz a conexão com o banco, modularizado com o consign
		var connection =  app.config.dbConnection();
		var noticiasModel = new app.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticia(function(error, result){
			// aponta qual é a view que irá renderizar e o json
			res.render("noticias/noticia", {noticias:result});
		});
	});
	
};
