// routes/textToBinary.js
const express = require('express');
const router = express.Router();

// Función para convertir texto a binario
function textToBinary(text) {
  return text
    .split('')
    .map((char) => char.charCodeAt(0).toString(2))
    .join(' ');
}

// Ruta para convertir texto a binario utilizando el método GET
router.get('/convert', (req, res) => {
  const { text } = req.query;
  if (!text) {
    return res.status(400).json({ error: 'Texto no proporcionado' });
  }

  const binary = textToBinary(text);
  res.json({ binary });
});

module.exports = router;
