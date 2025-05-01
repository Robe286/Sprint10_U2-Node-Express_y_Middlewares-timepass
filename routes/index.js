const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const mensaje = req.query.mensaje || ""
    res.send(`
    <h1>Bienvenido</h1>
    <h2>La hora actual es: ${req.horaTotal} ${mensaje}</h2>
    <a href="/endroute"><button>Entrar</button></a>  
    `)
})

module.exports = router;







/*
1. La primera ruta que debe salir nada más inicializar el servidor será `index.js`
En esta ruta habrá lo siguiente:
- Un texto de bienvenida y la hora actual
- Un botón que enlace `/endroute`
*/