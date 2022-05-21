const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;
  let uptimeForEmbed = `${Math.round(client.uptime / (1000 * 60 * 60))}h, ${Math.round(client.uptime / (1000 * 60)) % 60}m, ${Math.round(client.uptime / 1000) % 60}s`;
  let apiForEmbed = `${Math.round(client.ws.ping)} ms`;

  function main() {
    let infoBotEmbed = new Discord.MessageEmbed()
      .setColor('E03636')
      .setAuthor('Bot Info', 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
      .addFields(
        { name: 'Owner :', value: 'ElThomas#4119', inline: true },
        { name: 'Prefix :', value: 'g', inline: true },
        { name: 'Uptime :', value: uptimeForEmbed, inline: true },
        { name: 'Programming language  :', value: 'JavaScript', inline: true },
        { name: 'API  :', value: apiForEmbed, inline: true },
        { name: 'Number Commands  :', value: '10', inline: true },
        { name: 'Version  :', value: 'GoodFarm 0.1', inline: true },
        { name: 'Users  :', value: `${client.users.cache.size}`, inline: true },
        { name: 'Guilds :', value: `${client.guilds.cache.size}`, inline: true }
      )
      .addField('**GoodFarm Server Support**', `[Official Server](https://discord.gg/SdjzKsx)`)
      .addField('**GoodFarm Invitation**', `[Invitation](https://discord.com/oauth2/authorize?client_id=693813722296090656&scope=bot&permissions=805314622)`)
      .addField('**GoodFarm WebSite**', `[WebSite](https://goodfarm.8b.io/menu.html)`)
      .addField('**GoodFarm PREMIUM**', `[Buy the Premium](https://www.patreon.com/goodfarm)`);

    message.channel.send(infoBotEmbed);
  }
  main();
  const logChannel = client.channels.cache.get('584036562241585167');
  var now = new Date();
  var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  var messageEmbed = new Discord.MessageEmbed()
  messageEmbed.setColor('#6BBC21')
  messageEmbed.setAuthor(`Log ${date}`)
  messageEmbed.setDescription(`[BOTINFO] command by: ${client.users.cache.get(user.id).username}`);
  logChannel.send(messageEmbed);
};

module.exports.info = {
  names: ['info', 'bot', 'botinfo', 'information'],
};
