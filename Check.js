const { sequelize } = require('./models');

async function check() {
  const tablas = ['Usuarios', 'Perfils', 'Personajes', 'Habilidads', 'PersonajeHabilidads'];
  for (const tabla of tablas) {
    const [rows] = await sequelize.query(`SELECT COUNT(*) as total FROM "${tabla}"`);
    console.log(`${tabla}: ${rows[0].total} registros`);
  }
  process.exit();
}

check().catch(console.error);