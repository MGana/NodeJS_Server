
const EventEmitter = require('events');

let monEcouteur = new EventEmitter();

monEcouteur.on('saute' , function (a , b) {
	console.log("j'ai saute", a ,b)
})


monEcouteur.emit('saute', 10, 20)
//Lorsque cet evenement sera emit, il va declanche l'ecouteur

monEcouteur.emit('saute')
monEcouteur.emit('saute')
monEcouteur.emit('saute')

//notre variable server est un event listener
//a l interieur de la classe http.createServer, on a un emit, 
//et ca emit un evenement de type request et lui passe les parametres

// c est cette architecture qu il faut comprendre pour comprendre comme fonctionne l interieur du framework
