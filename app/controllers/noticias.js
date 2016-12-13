module.exports.noticias = function (application, req, res) {
    // recupera o modulo que faz a conexão com o banco, modularizado com o consign
    // como se fosse namespace
    var connection = application.config.dbConnection();
    // instancia de model
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function (error, result) {
        // aponta qual é a view que irá renderizar e o json
        res.render("noticias/noticias", { noticias: result });
    });
}

module.exports.noticia = function (application, req, res) {
    // recupera o modulo que faz a conexão com o banco, modularizado com o consign
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);
    // recupera parametros passados pela url
    var id_noticia = req.query;

    noticiasModel.getNoticia(id_noticia, function (error, result) {
        // aponta qual é a view que irá renderizar e o json
        res.render("noticias/noticia", { noticia: result });
    });
}