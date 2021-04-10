const { Scenes: {BaseScene} } = require("telegraf");
const { getMainKeyboard } = require("../../utils/keyboards");

module.exports = new BaseScene("main")
	.enter(async (ctx) => ctx.reply("Kerakli buyruqni tanlang", getMainKeyboard(ctx)))