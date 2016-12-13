module.exports = function(application){
	
	application.get('/noticias', function(req, res){
		// recupera o modulo que faz a conexão com o banco, modularizado com o consign
		// como se fosse namespace
	    var connection = application.config.dbConnection();
        // instancia de model
		var noticiasModel = new application.app.models.NoticiasDAO(connection);

		noticiasModel.getNoticias(function(error, result){
			// aponta qual é a view que irá renderizar e o json
			res.render("noticias/noticias", {noticias:result});
		});
	});	
};
