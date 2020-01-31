const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjcyNjUyNzk4NTU0NDA2OTEy.XjOoIQ.Z3JPIq3ox1gaikuMPo1dSfNWOMo);
