const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  function main() {
    let inviteEmbed = new Discord.MessageEmbed()
      .setColor('#ffffff')
      .setAuthor(`Invite for ${message.author.username}`)
      .addField('**__Invitation Bot__** :', 'https://discord.com/oauth2/authorize?client_id=693813722296090656&scope=bot&permissions=519241s')
      .addField('**__Invitation Serveur Official__** (with Giveaway !) :', 'https://discord.gg/SdjzKsx')
      .addField('**__GoodFarm WebSite__ :**', `https://goodfarm.8b.io/menu.html`)
      .setImage('https://cdn.discordapp.com/attachments/706631953595760710/709323314853707806/GoodGarmBanniere.png')
      .setFooter('Any request : @ELThomas#4119')
      .setTimestamp();
    message.channel.send(inviteEmbed);
  }
  main();
};

module.exports.info = {
  names: ['invite', 'support', 'oodfarm'],
};
