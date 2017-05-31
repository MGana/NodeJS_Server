//Je ne veux plus ecrire a chaque fois tout le code que j'ai fait pour le server
//donc ...


let http = require('http')

let fs = require('fs')

let url = require('url')

const EventEmitter = require('events');



//creation de la classe App
let App ={

	//creation de la methode start
	start : function (port) {
		let emitter = new EventEmitter()
		let server = http.createServer(( request, response ) => {

			response.writeHead(200, { 
				'Content-Type': 'text/html; charset=utf-8'	
			});

			if (request.url === '/') {
				emitter.emit('root', response)
			}
			response.end()
		}).listen(port)


		return emitter
	}

}

//ici , j'ai mis le code repetitif dans une fonction
// et j'ai utilié le systeme d EventEmitter pour avoir un code plus facile a utiliser

// Si par example je veux detecter un autre type d URL , je peux dire lorsque tu as cette URL , tu fais ce traitement la


//demarrer le serveur
let app = App.start(8080);

app.on('root', function(response) {

	response.write('Je suis a la racine')

})