var express = require('express');
/*var bodyParser = require('body-parser');*/

const connection = require('./knexfile')['development'];
const db = require('knex')(connection);

var app = express();
var port = process.env.PORT || 3001;

/*app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());*/

app.get('/', function(req, res){
	res.status(200).send({
		message: 'GET Home route working fine!'
	});
});
app.listen(port, function(){
	console.log(`Server running in http://localhost:${port}`);
});