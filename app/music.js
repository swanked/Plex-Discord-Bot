module.exports = function(client) {
  // plex commands -------------------------------------------------------------
  var plexCommands = require('../commands/plex');

  // when bot is ready
  client.on('ready', function() {
    console.log('bot ready');
    console.log('logged in as: ' + client.user.tag);

    plexCommands['plextest'].process();
  });

  // when message is sent to discord
  client.on('message', function(message){
    var msg = message.content.toLowerCase();
    if (msg.startsWith(process.env.COMMAND_MESSAGE_PREFIX) && !message.author.bot){
      var cmdTxt = msg.split(" ")[0].substring(process.env.COMMAND_MESSAGE_PREFIX.length, msg.length);
      var query = msg.substring(msg.indexOf(' ')+1);
      var cmd = plexCommands[cmdTxt];

      if (cmd){
        try {
          cmd.process(client, message, query);
        }
        catch (e) {
          console.log(e);
        }
      }
      else {
        message.reply('**Sorry, that\'s not a command.**\nDebug info:\ncmdText: ' + cmdTxt + "\nquery: " + query + "\ncmd: " + cmd);
      }

    }
  });
};
