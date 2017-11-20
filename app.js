const Discord = require('discord.js');
const client = new Discord.Client();
var entity = "<@382115660336988161>";

client.on('ready', () => {
  client.user.setPresence(
  {
    status: "idle",
    game: {
      name:"",
      type: 0,
      url: ""
    }
  });
});

client.on('message', function(message) => {
  const args = message.content.slice(entity.length).trim().split(/ +/g);
  const command =s args.shift().toLowerCase();

  if (message.content.startsWith(entity)) {
    if (command === 'ball') {
      message.reply("(╭☞ Ȋ     ͜ɂ  Ȋ  )╭☞ :basketball: ");
    }
  } if else {
      if (message.content.endsWith(entity)) {
        if ("ball" == command) {
          message.reply(":baseball: ☜╮( Ȋ     ͜ɂ  Ȋ  ☜╮) ");
      }
    }
  }
});


// Authorizes bot login token

client.login(process.env.APP_TOKEN);
