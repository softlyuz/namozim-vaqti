const {
	getDataSync,
	setDataRegions,
	getData,
} = require("../database/controllers/mainController");
const { initialDataCreator } = require("../database/others/initialDataSetter");

module.exports = (bot) => {
	bot.hears("_id", (ctx) => {
		return ctx.reply(`telegram user id: ${ctx.from.id}`);
	});
	bot.hears("_init", async (ctx) => {
		initialDataCreator();
		setDataRegions(await getData());
		bot.context.regions = getDataSync().regions;
		ctx.reply("Initialized 🥳");
	});
	bot.hears(/_l (\d{2}\.\d+),(\d{2}\.\d+)/, async (ctx) => {
		let [, lat, lng] = ctx.match;
		ctx.replyWithLocation(lat, lng);
	});
};
