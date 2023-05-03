// console.log(require('discord.js'));
require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is up and running!.`);
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot) {
    return;
  }
  //   console.log(
  //     `${msg.content} was sent by ${msg.author.tag} in ${msg.channel.name}`
  //   );
  //   if (msg.author.tag === 'kote#5520') {
  //     msg.react('🤔');
  //   }

  if (msg.content === 'hello') {
    msg.reply('amonugs');
    console.log('someone said hi in chat.');
  }
});

client.login(process.env.TOKEN);
