const { Scenes: {BaseScene} } = require("telegraf");
const weeklyTimes = require("../../views/prayertimes/posts/weeklyPost");

module.exports = new BaseScene("weekly").enter((ctx) => {
	const post = weeklyTimes(
		ctx.scene.state.subregion,
		ctx.scene.state.subregion.timesData
	);
	return ctx.replyWithHTML(post, { disable_web_page_preview: true });
});
