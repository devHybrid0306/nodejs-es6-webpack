

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'avatar_url',
    {
      type: Sequelize.STRING,
      allowNull: true,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('users', 'avatar_url'),
};
