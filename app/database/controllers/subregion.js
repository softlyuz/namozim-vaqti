const db = require("../models");
const Subregion = db.subregion;
const CrudHelper = require("../../utils/crudLog");
const { logger } = require("../../utils/logger");
const helper = new CrudHelper("Subregion")

function create(subregion) {
  return Subregion
    .create(subregion)
    .catch((err) => {
      logger('error', helper.create.error(subregion.name, err));
      throw err
    });
};

function update(id, data) {
  return Subregion
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

function getOne(id, options) {
  if (options) return Subregion.findByPk(id, options)
  
  return Subregion.findByPk(id)
};

const getAll = () => {
  return Subregion.findAll()
};

module.exports = {
  create,
  update,
  getOne,
  getAll
}
