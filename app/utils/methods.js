const getTimesScene = (ctx, mainCommands) => {
	switch (ctx.message.text) {
		case "🕰 Oylik":
			return mainCommands.monthly.value;
		case "🕔 Haftalik":
			return mainCommands.weekly.value;
		case "⏳ Bugungi":
			return mainCommands.today.value;
		case "📍 Hududni o'zgartirish":
			return mainCommands.settings.value;
	}
	return false;
};

module.exports = {
	getTimesScene
}