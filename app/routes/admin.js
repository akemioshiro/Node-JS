module.exports = function(app){
	app.get('/formulario_inclusao_noticia', function(req, res){
		// envia uma resposta
	    res.render("admin/form_add_noticia", { validacao: {}, noticia: {}});
	});

	app.post('/noticias/salvar', function (req, res) {
        // popula a propriedade body por request qd o post � utilizado
	    var noticia = req.body;

	    
	    req.assert("titulo", "O titulo � obrigat�rio").notEmpty();
	    req.assert("resumo", "O resumo � obrigat�rio").notEmpty();
	    req.assert("resumo", "O resumo deve conter entre 10 e 100 caracteres").len(10, 100);
	    req.assert("autor", "O autor � obrigat�rio").notEmpty();
	    req.assert("data_noticia", "A data � obrigat�ria").notEmpty().isDate({format:'YYYY-MM-DD'});
	    req.assert("noticia", "Noticia � obrigat�rio").notEmpty();

	    var erros = req.validationErrors();
	    if (erros) {
	        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
	        return;
	    }

	    var connection = app.config.dbConnection();
	    var noticiasModel = new app.app.models.NoticiasDAO(connection);

	    noticiasModel.salvarNoticia(noticia, function (error, result) {
	        // ao cadastrar a informa��o ja eh enviado para pagina de noticias 
	        // e impede o problema do f5 nas requisi��es por post
	        res.redirect("/noticias")
	    });

	});
};	