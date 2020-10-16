

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'users',
    'session_code',
    {
      type: Sequelize.STRING,
      allowNull: false,
    },
  ),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('users', 'session_code'),
};
