const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;

  function main() {
    let helpEmbed = new Discord.MessageEmbed()
      .setColor('FFB500')
      .setAuthor(`Help page`, 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
      .addFields(
        { name: '**Core**', value: '\n`gstart`, `ghelp`\n' },
        { name: '\n**Main**', value: '\n`gfarm`, `gmine`, `ggenerator`, `grestart`\n ' },
        { name: '\n**Economy**', value: '\n`gchest`, `gconvert`, `gdaily`, `ghourly`, `gpay`, `gsell`, `gsellall`, `gshop`, `gupgrade`, `gbuy`\n' },
        { name: '\n**Item**', value: '\n`gbank`, `ginventory`, `gpickaxe`, `gshovel`\n' },
        { name: '\n**Other**', value: '\n`ggive`, `gungive`, `ginfo`, `gsupport`, `ginvite`, `gping`' }
      )
      .setImage('https://cdn.discordapp.com/attachments/909131953872191569/909132017025818644/AddPub3.png')
      .setTimestamp();
    message.channel.send(helpEmbed);
  }
  main();
  const logChannel = client.channels.cache.get('584036562241585167');
  var now = new Date();
  var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  var messageEmbed = new Discord.MessageEmbed()
    .setColor('#6BBC21')
    .setAuthor(`Log ${date}`)
    .setDescription(`[HELP] command by: ${client.users.cache.get(user.id).username}`);
  logChannel.send(messageEmbed);
};

module.exports.info = {
  names: ['help'],
};
