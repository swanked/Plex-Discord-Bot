// sanity check env ------------------------------------------------------------
if (typeof process.env.COMMAND_MESSAGE_PREFIX == "undefined") {
    process.env.COMMAND_MESSAGE_PREFIX = "!";
}

// packages --------------------------------------------------------------------
const Discord = require('discord.js');

// my keys ---------------------------------------------------------------------
var keys = require('./config/keys.js');

// discord client --------------------------------------------------------------
const client = new Discord.Client();

// bot functions ---------------------------------------------------------------
require('./app/music.js')(client);

client.login(keys.botToken);
