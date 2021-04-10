const db = require("../models");
const User = db.user;
const CrudHelper = require("../../utils/crudLog");
const { logger } = require("../../utils/logger");
const helper = new CrudHelper("User")

function create(id) {
  return User
    .create({ id })
    .then((user) => {
      logger('info',helper.create.success(user.id));
      return user
    })
    .catch((err) => {
      logger('error',helper.create.error(id, err));
      throw err
    });
};

function update(id, data) {
  return User
    .update(data, { where: { id } })
    .then(num => {
      if (num == 1) logger('info',helper.update.success(id));
      else logger('warn',helper.update.problem(id));
    })
    .catch(err => {
      logger('error',helper.update.error(id, err));
      throw err
    });
};

function getOne(id) {
  return User.findByPk(id)
};

const getAll = () => {
  return User.findAll()
};

module.exports = {
  create,
  update,
  getOne,
  getAll
}
