const express = require('express');
const app = express();
const PORT = 3000;
const indexRoute = require('./routes/index');

app.use('/', indexRoute)

app.listen(PORT, () => {
    console.log(`Node.js está escuchando en el puerto http://localhost:${PORT}`)
})