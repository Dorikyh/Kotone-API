const express = require('express');
const app = express();
const textToBinaryRoutes = require('./routes/textToBinary');

// Ruta para servir el frontend
app.use(express.static(__dirname));

// Ruta de la API para convertir texto a binario utilizando el método GET
app.use('/api/text-to-binary', textToBinaryRoutes);

// Iniciar el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
