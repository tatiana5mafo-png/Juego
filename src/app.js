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

app.use('/api/personajes', personajesRouter);
app.use('/api/habilidades', habilidadesRouter);
app.use('/api/usuarios', usuariosRouter);

// Middleware global de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Verifica conexión y arranca
(async () => {
  await sequelize.authenticate();
  console.log('Conexión a la base de datos exitosa');
  app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
})();