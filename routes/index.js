const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>Bienvenido</h1>
            <h2>La hora actual es:</h2>
            <button>Entrar</button>
    
        </body>
        </html>   
    `)
})








/*
1. La primera ruta que debe salir nada más inicializar el servidor será `index.js`
En esta ruta habrá lo siguiente:
- Un texto de bienvenida y la hora actual
- Un botón que enlace `/endroute`
*/