const db = require("../models");
const Region = db.region;
const CrudHelper = require("../../utils/crudLog");
const { logger } = require("../../utils/logger");
const helper = new CrudHelper("Region")

function create(region) {
  return Region
    .create(region)
    .catch((err) => {
      logger('error',helper.create.error(region.name, err));
      throw err
    });
};

function update(id, data) {
  return Region
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
  return Region.findByPk(id)
};

const getAll = () => {
  return Region.findAll({
    include: "subregions"
  });
};

module.exports = {
  create,
  update,
  getOne,
  getAll
}
