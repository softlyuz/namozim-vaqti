'use strict';

const { Sequelize } = require('sequelize');
const { database } = require('../../config');
const config = require("../../config/config.json")[database];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, { ...config, logging: false });

db.user = require("./user")(sequelize, Sequelize);
db.region = require("./region")(sequelize, Sequelize);
db.subregion = require("./subregion")(sequelize, Sequelize);

db.region.hasMany(db.subregion);
db.subregion.belongsTo(db.region);

db.subregion.hasMany(db.user);
db.user.belongsTo(db.subregion);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;