const _region = require("../controllers/region")
const _subregion = require("../controllers/subregion")
const db = require("../models")
const regions = require("./regions.json")
regions.reverse()

function initialDataCreator() {
  regions.forEach(region => {
    _region.create(region).then(cRegion => {
      region.regions.forEach(subregion => {
        delete subregion.id
        _subregion.create({ ...subregion, regionId: cRegion.id })
      })
    })
  })
}

module.exports = {
  initialDataCreator
}