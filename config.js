require('dotenv').config();

module.exports = {
    BOT_TOKEN: process.env.BOT_TOKEN || '8402337975:AAFcTQHy98FMAqP2NgxrOsZi8Ea83JHIjIc',
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://genshingaurav11_db_user:yvzHB0fJxcOKiTvb@fexbot.htstawp.mongodb.net/?appName=fexbot',
    MAIN_ADMIN_ID: parseInt(process.env.MAIN_ADMIN_ID) || 6155928882, // Your Telegram ID here
    ADMIN_PASS: process.env.ADMIN_PASS || 'sujoylnd'
};