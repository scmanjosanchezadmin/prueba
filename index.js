// index.js
const express = require('express');
const cors = require('cors'); // Importa CORS

const app = express();
const PORT = 3000;

// Habilita CORS para todas las solicitudes
app.use(cors());

// Lista de elementos (puede ser cualquier cosa, aquí usamos un ejemplo simple)
const elementos = [
  { id: 1, nombre: 'Elemento 1' },
  { id: 2, nombre: 'Elemento 2' },
  { id: 3, nombre: 'Elemento 3' },
  { id: 4, nombre: 'Elemento 4' },
  { id: 5, nombre: 'Elemento 5' },
  { id: 6, nombre: 'Elemento 6' },
  { id: 7, nombre: 'Elemento 7' },
  { id: 8, nombre: 'Elemento +8' },
  { id: 9, nombre: 'Elemento 9' },
  { id: 10, nombre: 'Elemento 10' },
  { id: 11, nombre: 'Elemento 11' },
  { id: 12, nombre: 'Elemento 102' }
];

// Endpoint para devolver los primeros 10 elementos
app.get('/elementos', (req, res) => {
  const primerosDiezElementos = elementos.slice(0, 10);
  res.json(primerosDiezElementos);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
