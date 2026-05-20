const { faker } = require('@faker-js/faker');

module.exports = {
  async up(queryInterface) {
    const usuarios = Array.from({ length: 5 }).map(() => ({
      nombre: faker.internet.userName(),
      correo: faker.internet.email(),
      contrasena: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Usuarios', usuarios);

    // Crear un perfil por cada usuario
    const insertados = await queryInterface.sequelize.query(
      'SELECT id FROM Usuarios ORDER BY id ASC LIMIT 5;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const perfiles = insertados.map(u => ({
      biografia: faker.lorem.sentence(),
      avatar: faker.image.avatar(),
      usuarioId: u.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Perfils', perfiles);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Perfils', null, {});
    await queryInterface.bulkDelete('Usuarios', null, {});
  },
};
