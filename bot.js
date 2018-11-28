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


client.om('message',msg =>{
  if(msg.content== 'merhaba nasılsın'){
    msg.reply('çok saol ben çok iyiyim ya sen ?')
  } 
})

client.on('message',msg =>{
  if (msg.content == 'mert') {
    msg.reply('Twitch de  yayında')
  }
})

 if(command === "küfür") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }

client.login('token!!!!
');
