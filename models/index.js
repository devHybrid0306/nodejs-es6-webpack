// ref: https://github.com/sequelize/sequelize/issues/4974#issuecomment-271359179
import Sequelize from 'sequelize';

const models = {};

function getModels(config, force = false) {
  if (Object.keys(models).length && !force) {
    return models;
  }

  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );

  const modules = [
    require('./user.js'),
    require('./video.js'),
    require('./users_videos.js'),
  ];

  // Initialize models
  modules.forEach((module) => {
    const model = module(sequelize, Sequelize, config);
    models[model.name] = model;
  });

  // Apply associations
  Object.keys(models).forEach((key) => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

  models.sequelize = sequelize;
  models.Sequelize = Sequelize;

  return models;
}

module.exports = {
  getModels,
};
