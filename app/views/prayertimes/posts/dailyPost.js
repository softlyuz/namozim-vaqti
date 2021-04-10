const moment = require('moment');
const { footer, header } = require("../../../constants/texts");
const { getCurrentTime, getWeekDay, getMonth } = require("../utils");

const dailyTimes = (subregion, dailyData) => {
    const dailyTime = getCurrentTime(dailyData.data);
    let today = moment();
    let text = `<b>Bugun ${getWeekDay(today.day())}, ${dailyTime.date.gregorian.day}-${getMonth(today.month())}:</b>\n\n<b>${subregion.region.name}, ${subregion.name}</b>\n\nNamoz vaqtlari:\n⏱Tong: ${dailyTime.timings.Fajr.slice(0,5)}\n⏱Quyosh: ${dailyTime.timings.Sunrise.slice(0,5)}\n⏱Asr: ${dailyTime.timings.Asr.slice(0,5)}\n⏱Shom: ${dailyTime.timings.Sunset.slice(0,5)}\n⏱Xufton: ${dailyTime.timings.Isha.slice(0,5)}`;
    return text;
};

module.exports = dailyTimes;