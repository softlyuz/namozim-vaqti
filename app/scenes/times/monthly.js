const { Scenes: {BaseScene} } = require("telegraf");
const monthlyTimes = require("../../views/prayertimes/posts/monthlyPost");

module.exports = new BaseScene("monthly").enter((ctx) => {
	const post = monthlyTimes(
		ctx.scene.state.subregion,
		ctx.scene.state.subregion.timesData
	);
	return ctx.replyWithHTML(post, { disable_web_page_preview: true });
});