const { Scenes: {BaseScene} } = require("telegraf");
const DailyTime = require("../../views/prayertimes/posts/dailyPost");

module.exports = new BaseScene("today").enter((ctx) => {
	const post = DailyTime(
		ctx.scene.state.subregion,
		ctx.scene.state.subregion.timesData
	);
	return ctx.replyWithHTML(post, { disable_web_page_preview: true });
});
