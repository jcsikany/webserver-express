
const http = require('http');//No hay q hacer un npm install de esto porq son los paquetes q ya vienen en node.


//para poder escuchar peticiones http primero tenemos q crear el servidor
http.createServer( (req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});

        let salida = {
            nombre: 'Fernando',
            edad: 32,
            url: req.url
        }

    res.write( JSON.stringify(salida) );
    res.end();

})
.listen(8080); //Definimos el puerto en el q se va a estar escuchando

console.log('Escuchando el puerto 8080');