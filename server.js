// Notre but c'est de creer un systeme qui va ecouter des connexions
// Docs : nodejs.org   ou devdocs.io/node

//inclure le module http
let http = require('http')

let server = http.createServer()

//server.on('request', function ( request, response ){
//})

server.on('request',  ( request, response ) => {
	response.writeHead(200, { 
		'Content-Type': 'text/html; charset=utf-8'	
	});
	response.end('Salut');

})

//ecoute sur le port 8080   http://localhost:8080/
server.listen(8080)

