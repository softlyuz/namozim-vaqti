const winston = require('winston');

const winstonLogger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: '../../logs/main.log'})
    ],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint()
    ),
    defaultMeta: {
        time: new Date()
    }
});

const logger = (type = 'silly', arg) => {
    winstonLogger.log(type, arg);
}

module.exports = { logger };