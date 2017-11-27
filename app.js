const Discord = require('discord.js');
const client = new Discord.Client();
var entity = "<@382115660336988161>";

client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', msg => {
  var args = msg.content.slice(entity.length).trim().split(/ +/g);
  var command = args.shift().toLowerCase();

  if (msg.content.startsWith(entity)) {
    if (command === 'ball') {
      msg.reply("(╭☞ Ȋ     ͜ɂ  Ȋ  )╭☞ :basketball: ");
    }
  } if else {
      if (msg.content.endsWith(entity)) {
        if (command === 'ball') {
          msg.reply(":baseball: ☜╮( Ȋ     ͜ɂ  Ȋ  ☜╮) ");
        }
      }
    }
  }
});


// Authorizes bot login token
client.login(process.env.BOT_TOKEN);
