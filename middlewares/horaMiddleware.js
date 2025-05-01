// - `horaMiddleware.js`: De aquí sacaremos la hora.
// Recuerda que hay que pasarla como una reqy con js
// podemos obtener la fecha con new Date()

module.exports = (req, res, next) => {
    const now = new Date()
    const horaActual = now.getHours();
    const minutosActual = now.getMinutes();
    const horaTotal = `${horaActual}:${minutosActual}`

    req.horaTotal = horaTotal;
    req.horaActual = horaActual;
    next()
};

