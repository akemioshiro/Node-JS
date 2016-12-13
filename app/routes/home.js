module.exports = function(app){	
	app.get('/', function(req, res){
		// envia uma resposta
		res.render("home/index");
	});
}