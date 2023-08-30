import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.addColumn('favorite', 'pokemonName', {
      type: DataTypes.STRING,
      allowNull: true, 
    });
  },
  down: async (queryInterface: QueryInterface): Promise<void> => {
    await queryInterface.removeColumn('favorite', 'pokemonName');
  }
};
