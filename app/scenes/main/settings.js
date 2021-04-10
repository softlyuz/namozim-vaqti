const { Scenes: {BaseScene} } = require("telegraf");

module.exports = new BaseScene("settings").enter((ctx) =>
	ctx.scene.enter("selectRegion")
);
