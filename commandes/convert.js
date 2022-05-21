const Discord = require('discord.js');
const EconomyData = require('../modules/economy.js');
const ItemsData = require('../modules/items.js');
const ConfigPriceItem = require('../config/configressource.json');
const ConfigEmoji = require('../config/configemoji.json');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**=== Account Items ===*/
  let items = await ItemsData.findOne({ userId: message.author.id });
  if (!items) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**=== Account Economy ===*/
    let economy = await EconomyData.findOne({ userId: message.author.id });
    if (!economy) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**Command */
      var numberInput = Math.floor(args[0]);

      function log(numberInput) {
        const logChannel = client.channels.cache.get('584036562241585167');
        var now = new Date();
        var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        var messageEmbed = new Discord.MessageEmbed()
          .setColor('#ECCC09')
          .setAuthor(`Log ${date}`)
          .setDescription(`[PING] command by: ${client.users.cache.get(user.id).username}\nConvert done: ${numberInput}`);
        logChannel.send(messageEmbed);
      }

      function main() {
        if (isNaN(numberInput) === false) {
          /**Random Business Value */
          var randomBusinessValue = Math.floor(Math.random() * 110 * (numberInput / 2 + 1) + 1);
          economy.eco.businessvalue = economy.eco.businessvalue += randomBusinessValue;

          var amoutRainbow = ConfigPriceItem.gemPrice.rainbow * numberInput;
          var amoutClover = ConfigPriceItem.gemPrice.clover * numberInput;
          /**== Verification ==*/
          if (numberInput > 2000) {
            return message.reply(`you can't convert that many gems, try less! (max: 2000)`);
          }
          if (numberInput === 0) {
            return message.reply(`you cannot convert 0 gem ...`);
          }
          if (items.mine.rainbow < amoutRainbow) {
            return message.reply(`Oh no, you don't have enough **Rainbow Ingot** ${ConfigEmoji.itemMineEmoji.rainbow} to buy ${numberInput}${ConfigEmoji.economyEmoji.gem}, you're missing: **${amoutRainbow - items.mine.rainbow}**${ConfigEmoji.itemMineEmoji.rainbow}`);
          }
          if (items.farm.clover < amoutClover) {
            return message.reply(`Oh no, you don't have enough **Clover** ${ConfigEmoji.itemFarmEmoji.clover} to buy ${numberInput}${ConfigEmoji.economyEmoji.gem}, you're missing: **${amoutClover - items.farm.clover}**${ConfigEmoji.itemFarmEmoji.clover}`);
          }
          if ((items.farm.clover >= amoutClover) & (items.mine.rainbow >= amoutRainbow)) {
            message.reply(`**Successful !**\nYou buy ${numberInput}${ConfigEmoji.economyEmoji.gem} for ${amoutRainbow}${ConfigEmoji.itemMineEmoji.rainbow} and ${amoutClover}${ConfigEmoji.itemFarmEmoji.clover}`);
            economy.eco.gem = economy.eco.gem += numberInput;
            items.farm.clover = items.farm.clover -= amoutClover;
            items.mine.rainbow = items.mine.rainbow -= amoutRainbow;
            economy.save();
            items.save();
            log(numberInput);
          }
        } else {
          return message.reply('❌ the amount is not valid, please try again, `gconvert <gem amout>`');
        }
      }
      main();
    }
  }
};

module.exports.info = {
  names: ['convert'],
};
