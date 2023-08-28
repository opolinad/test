import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.createTable('user', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      username: {
        type: DataTypes.TEXT
      },
      password: {
        type: DataTypes.TEXT
      },
      firstname: {
        type: DataTypes.TEXT
      },
      lastname: {
        type: DataTypes.TEXT
      },
      email: {
        type: DataTypes.TEXT,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.dropTable('user');
  }
};