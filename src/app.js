require('dotenv').config();
const express = require('express');
const { sequelize } = require('../models');

const personajesRouter = require('./routes/personajes');
const habilidadesRouter = require('./routes/habilidades');
const usuariosRouter = require('./routes/usuarios');
const requestLogger = require('./middlewares/requestLogger');
const sanitizeIds = require('./middlewares/sanitizeIds');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(requestLogger);
app.use(sanitizeIds);

// ← Ruta pública de verificación
app.get('/authors', (req, res) => {
  res.json([
    { nombre: 'Tatiana Mayorga', codigo: '0000001' },
    { nombre: 'Laura',           codigo: '0000002' },
  ]);
});

app.use('/api/personajes', personajesRouter);
app.use('/api/habilidades', habilidadesRouter);
app.use('/api/usuarios', usuariosRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

(async () => {
  await sequelize.authenticate();
  console.log('Conexión a la base de datos exitosa');
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
})();