//On gere ici les Streams / flux de donnees


//script capable de copie un fichier



/*
let fs = require('fs')

//ici  data sera un buffer
fs.readFile('demo.mp4' , (err, data) => {
	if (err) throw err

	fs.writeFile('copy.mp4', data, (err) => {
		if (err) throw err
			console.log('Le fichier a bien ete copie')
	})	
})
*/



//On lit ici le fichier , et on se retrouve avec une variable data qui va contenir l esble du fichier
//ce qui n est pas tres terrible en terme de performance
//Si on lit un gros fichier de 10 ou 20 Go , pendant ce processus on va depasser la memoire attibué a NodeJS

//Si on ecrit sur un disque dur different de celui de la lecture , on peut faire les chose simultanément,
//on lit un morceau et on l'ecrit

//le principe du flux va nou permettre de resoudre ce probleme
//l idee est de lire un fichier et d avoir un evenement qui permet de lire bloc par bloc



let fs = require('fs')
let file = 'demo.mp4'


//j'utilise stat pour pouvoir connaitre l etat de progression de mon fichier
fs.stat(file , (err, stat) => {

	let total = stat.size

	let progress = 0

	let read = fs.createReadStream(file)

	//chunk est un morceau , ici de type buffer
	//http://devdocs.io/node/stream#stream_class_stream_readable
	read.on('data', (chunk) => {

		progress += chunk.length
		console.log('J ai lu ' + Math.round( (100*progress/total)) + "%" )
	} )

	read.on('end', () => {
		console.log('J ai fini la lecture')
	})

})
