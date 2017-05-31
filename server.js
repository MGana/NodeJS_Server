// Notre but c'est de creer un systeme qui va ecouter des connexions
// Docs : nodejs.org   ou devdocs.io/node

//inclure le module http
let http = require('http')
//fs file system pour lecture des fichiers
let fs = require('fs')


let server = http.createServer()

//server.on('request', function ( request, response ){
//})

server.on('request',  ( request, response ) => {
	//lorsque une requete arrive je lit un fichier
	fs.readFile('index.html', (err,data) => {
		//s il y a des erreurs
		if (err) {
			response.writeHead(404)
			response.end("Ce fichier n'existe pas")
		} else {
			//on ecrit les entetes
			response.writeHead(200, { 
				'Content-Type': 'text/html; charset=utf-8'	
			});
		
			//on transmet les donnees
			response.end(data);
		}


	})

})

//ecoute sur le port 8080   http://localhost:8080/
server.listen(8080)


