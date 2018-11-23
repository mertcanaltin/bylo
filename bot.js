onst Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`bot sunuculara giriş yaptı Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('Aleykümselam!');
  }
});

client.on('message',msg =>{
  if (msg.content == 'mert') {
    msg.reply('Twitch de  yayında')
  }
})

client.login('token!!!!
');
