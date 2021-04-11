const subregion = require("../database/controllers/subregion");
const callApi = require("../api/callApi");
const { getTimesScene } = require("../utils/methods");
const bot = require("./bot");
const mainCommands = require("./mainCommands");

bot
	.start((ctx) => ctx.scene.enter("start"))
	.on("text", async (ctx, next) => {
		const timesScene = getTimesScene(ctx, mainCommands);
		if (timesScene) {
			// get subregion
			const _subregion = await subregion.getOne(ctx.session.user.subregionId, {
				include: "region",
			});

			let data = await callApi(_subregion.latitude, _subregion.longitude);

			subregion.update(_subregion.id, { timesData: data });
			_subregion.timesData = data;
			return ctx.scene.enter(timesScene, { subregion: _subregion });
		}

		// other commands
		// for (const command of Object.values(mainCommands)) {
		// 	// asosiy menyuning har bir kamanda tarjimasini olish
		// 	let text = ctx.i18n.t(command.internalizationPath);

		// 	// agar tarjima kelgan text bilan teng bo'lsa uni kerakli scene'ga yo'naltiramiz
		// 	if (text === ctx.message.text) {
		// 		return ctx.scene.enter(command.value);
		// 	}
		// }

		return next();
	})
	.use((ctx) => {
		return ctx.scene.enter("main");
		// ctx.scene.enter("main")
	});
