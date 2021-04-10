const moment = require('moment');

const getCurrentTime = (times) => {
    return times.filter(obj => obj.date.readable === moment().format('DD MMM YYYY'))[0];
};

const getWeekly = (times) => {
    let dayIndex = times.indexOf(getCurrentTime(times));
    let weekly = [];
    for (let i = dayIndex; i < dayIndex + 7; i++) {
        let day = times[i];
        if(day) {
            weekly.push(day);
        };
    };
    return weekly;
};

const getWeekDay = (day) => {
    let days = ['Yakshanba','Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba'];
    return days[day];
}

const getMonth = (num) => {
    let months = ['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentabr','oktabr','noyabr','dekabr'];
    return months[num];
}

module.exports = {
    getCurrentTime,
    getWeekly,
    getWeekDay,
    getMonth
};