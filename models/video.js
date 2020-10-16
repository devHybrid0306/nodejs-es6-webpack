module.exports = (sequelize, DataTypes) => {
  const video = sequelize.define('video', {
    title: DataTypes.STRING,
    tvid: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    underscored: true,
  });
  video.associate = function (models) {
    // associations can be defined here
    models.video.belongsToMany(video, { as: 'users', through: 'users_videos', foreignKey: 'video_id' });
  };
  return video;
};
