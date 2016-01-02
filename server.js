var express = require('express');
var stormpath = require('express-stormpath');
var path = require('path');
var app = express();

// express config
app.use(express.static(__dirname + '/public'));
app.use(stormpath.init(app, {
  website: true,
  web: {
    spaRoot: path.join(__dirname, 'public', 'index.html')
  }
}));

// routes
app.get('/*', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
});

// start server, wait for stormpath
app.on('stormpath.ready', function () {
	app.listen(3000, function(){
		console.log('Server started on port ' + 3000);
	});
});
