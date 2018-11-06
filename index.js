var express = require('express');
var app = express();


app.get('/', function(request, response) {
	response.sendfile('./index.html');
})

app.post('/username', function (req, res) {
	res.send('Bienvenue sur la page user')
	console.log('Acces a la page user')
})

app.listen(3000, function () {
  console.log('Server running on port 3000')


})
