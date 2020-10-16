
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    child_birthday: DataTypes.STRING,
    session_code: { type: DataTypes.STRING, unique: true },
    avatar_url: DataTypes.STRING,
  }, {
    underscored: true,
  });
  user.associate = function (models) {
    // associations can be defined here
    models.user.belongsToMany(user, { as: 'favorites', through: 'users_videos', foreignKey: 'user_id' });
  };
  return user;
};
