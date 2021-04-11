const {
	getData,
	setDataRegions,
} = require("./app/database/controllers/mainController");

async function main() {
	// const db = require("./app/database/models");
	// await db.sequelize.sync();
	// await db.sequelize.sync({ alter: true }).then(() => { console.log("altered"); });

	setDataRegions(await getData());
	// require("./app/views/posts/weeklyWeather");
	require("./app/core");
}

// process.on('unhandledRejection', (reason, p) => {
//   logToAdmin('Unhandled Rejection at:w Promise ', reason)
//   console.log('Unhandled Rejection at:w Promise ' + reason)
// })

main();
