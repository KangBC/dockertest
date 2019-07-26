import path from 'path';

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'fnsapi';
config.serverPort = process.env.serverPort || 3256;
config.TOKEN_SECRET = 'weroiusdf34werljk90123sdlfkjsr';

export default config;
