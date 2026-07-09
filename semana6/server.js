const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let incidencias = [];

// Ruta GET para consultar incidencias
app.get('/incidencias', (req, res) => {
    res.json(incidencias);
});

// Ruta POST para agregar una incidencia
app.post('/incidencias', (req, res) => {
    const nuevaIncidencia = req.body;
    incidencias.push(nuevaIncidencia);
    res.status(201).json({ mensaje: 'Incidencia registrada con éxito', data: nuevaIncidencia });
});

app.listen(PORT, () => {
    console.log(`Servidor de la semana 6 corriendo en el puerto ${PORT}`);
});
