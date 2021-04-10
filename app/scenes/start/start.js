const { Scenes: {BaseScene} } = require("telegraf");

const initialSessionStart = (ctx) => {
	ctx.session.first_time = true
	ctx.session.user = {}
}

const start = new BaseScene('start')
	.enter(async (ctx) => {
		initialSessionStart(ctx)
		ctx.reply(`Assalomu alaykum, ${ctx.from.first_name}. NamozimVaqti botiga hush kelibsiz. Namoz vaqtini aniqlab olish uchun hududni tanlang yoki lokatsiya tashlang`)
		return ctx.scene.enter("selectRegion")
	})
	.use((ctx) => ctx.scene.reenter())

module.exports = start