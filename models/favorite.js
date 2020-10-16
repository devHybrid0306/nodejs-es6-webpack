// @flow

export default (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    username: DataTypes.STRING,
    childBirthDay: DataTypes.STRING,
  });

  return Favorite;
};
