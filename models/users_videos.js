
module.exports = (sequelize, DataTypes) => {
  const users_videos = sequelize.define('users_videos', {
    video_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    underscored: true,
  });
  users_videos.associate = function (models) {
    // associations can be defined here
  };
  return users_videos;
};
