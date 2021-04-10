require("dotenv").config();

const production = process.env.NODE_ENV === "production";
const database = production ? "production" : "development";
const PORT = process.env.PORT;
const DEV = process.env.DEV;
const URL = isP(process.env.URL, "http://localhost:" + PORT);
const TOKEN = isP(process.env.TOKEN, process.env.TEST_TOKEN);

if (!TOKEN) throw new Error(`TOKEN NOT FOUND!`);

function isP(in_production, in_development) {
	if (production) return in_production;
	return in_development;
}

module.exports = {
	production,
	PORT,
	DEV,
	URL,
	database,
	TOKEN,
};
