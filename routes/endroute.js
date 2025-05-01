const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora.js')

router.get('/', validarHora, (req, res) => {
    res.send(`
    <h1>Has llegado a la ruta final ${req.horaTotal}</h1><a href="/">Volver</a>  
    `)
})

module.exports = router;

/*
Llegaremos a la ruta `/endroute` y el `endroute.js` tendrá el siguiente contenido: 
Un texto dando la bienvenida y la ruta donde estamos
*/