const { Telegraf, session, Scenes: {Stage} } = require('telegraf');
const { DEV, database, TOKEN } = require('../config');
const bot = new Telegraf(TOKEN);
const TelegrafI18n = require('telegraf-i18n')
const i18n = new TelegrafI18n({
    directory: require('path').resolve(__dirname, '../locales'),
    defaultName: 'uz',
    sessioName: 'session',
    useSession: true,
	templateData: {
		pluralize: TelegrafI18n.pluralize,
	},
});

const globalCommands = require('./globalCommands');
const scenes = require('../scenes');
const stage = new Stage(Object.keys(scenes).map(s => scenes[s]));
const { getDataSync } = require('../database/controllers/mainController');
const checkAuth = require('../utils/checkAuth');

bot.context.regions = getDataSync().regions;

bot.catch(err => {
    const msg = `Error handled:\n${err}`;
    console.log(msg, err);
    bot.telegram.sendMessage(DEV, msg);
});

globalCommands(bot);

bot
    .use(session())
    .use(i18n.middleware())
    .use(stage.middleware())
	.use((ctx, next) => {
		try {
			if (ctx.session) {
				return checkAuth(ctx, next);
			} else {
				return logToAdmin("session not found");
			}
		} catch (error) {
			console.log(error);
			return logToAdmin("main use middlewere error", error.stack || error);
		}
	})
    .launch()
    .then(() => {
        const msg = `Bot started in ${database} mode!`;
        console.log(msg);
        bot.telegram.sendMessage(DEV, msg);
    })
module.exports = bot;