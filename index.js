var thesaurus = require("thesaurus-com");
var dictcc = require("dictcc-js");
var restify = require("restify");

var port = 9987;
var server = restify.createServer();

server.get("/:word", function(req, res, next) {

	console.log(req.params.word);

	// translate
	dictcc.translate("en", "de", encodeURIComponent(req.params.word), function(response, err) {

		res.setHeader("Content-Type", "application/json");
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.send({
			"thesaurus": thesaurus.search(req.params.word),
			"translate": response
		});

		return next();
	});
});

server.listen(port, function() {
	console.log('listening at %s', port);
});
