const { getAll } = require("./region");

let dataStore = {};

function getData() {
  return getAll()
};

function getDataSync() {
  return dataStore
};

function setDataRegions(regions) {
  dataStore.regions = regions
};

module.exports = {
  getData,
  setDataRegions,
  getDataSync
};