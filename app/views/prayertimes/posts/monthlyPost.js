const moment = require('moment');
const { footer, header } = require("../../../constants/texts");

const monthlyTimes = (subregion, monthlyTimes) => {
    let text = `${subregion.region.name}, ${subregion.name}\n<b>Oylik namoz vaqtlari:</b>\n\n<code>Sana  | Tong  | Quyosh | Asr  | Shom  | Xufton`;
    monthlyTimes.data.map(({timings, date}) => {
        const formattedDate = moment(date.readable).format('DD.MM');
        let dayText = `\n${formattedDate} | ${timings.Fajr.slice(0,5)} | ${timings.Sunrise.slice(0,5)} | ${timings.Asr.slice(0,5)} | ${timings.Sunset.slice(0,5)} | ${timings.Isha.slice(0,5)}`;
        text = text.concat(dayText);
    });
    text = text.concat('</code>');
    return text;
};

module.exports = monthlyTimes;