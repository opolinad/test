import { QueryInterface } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import bcrypt from "bcrypt";

module.exports = {
  async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
    await queryInterface.bulkInsert('user', [
      {
        username: 'test',
        password: bcrypt.hashSync('password', 10),
        firstname: 'Andrés',
        lastname: 'López',
        email: 'andreslop@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface: QueryInterface, Sequelize: Sequelize) {
    return queryInterface.bulkDelete('syncStatus', null, {});
  }
};
