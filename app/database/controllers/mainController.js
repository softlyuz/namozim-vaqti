const { getAll } = require("./region");

let dataStore = {};

function getData() {
	return getAll();
}

function getDataSync() {
	return dataStore;
}

function updateContext(regions) {
	const bot = require("../../core/bot");
	bot.context.regions = regions;
}

function setDataRegions(regions) {
	dataStore.regions = regions;
}

module.exports = {
	getData,
	setDataRegions,
	getDataSync,
	updateContext,
};
