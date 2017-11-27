const Discord = require('discord.js');
const client = new Discord.Client();
const entity = "<@382115660336988161>";

client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', msg => {
  const args = msg.content.slice(entity.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (msg.content.startsWith(entity)) {
    if (command === 'ball') {
      msg.reply("(╭☞ Ȋ     ͜ɂ  Ȋ  )╭☞ :basketball: ");
    }
  } else {
      if (msg.content.endsWith(entity)) {
        if ("ball" == command) {
          msg.reply(":baseball: ☜╮( Ȋ     ͜ɂ  Ȋ  ☜╮) ");
      }
    }
  }
});


// Authorizes bot login token
client.login(process.env.BOT_TOKEN);
