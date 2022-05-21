const Discord = require('discord.js');
const EconomyData = require('../modules/economy.js');
const ItemsData = require('../modules/items.js');
const ConfigEmoji = require('../config/configemoji.json');
const StatsData = require('../modules/stats.js');
const config = require('../config.json');
/**Config Cooldown */
//const shuffleTime = 3.6e6;
const shuffleTime = 0;
var cooldownPlayers = new Discord.Collection();

module.exports.run = async (client, message, args) => {
  var user = message.author;

  /**=== Cooldown Commands: Hourly: 1h */
  if (cooldownPlayers.get(message.author.id) && new Date().getTime() - cooldownPlayers.get(message.author.id) < shuffleTime) {
    var measuredTime = new Date(null);
    measuredTime.setSeconds(Math.ceil((shuffleTime - (new Date().getTime() - cooldownPlayers.get(message.author.id))) / 1000)); // specify value of SECONDS
    var MHSTime = measuredTime.toISOString().substr(11, 8);
    message.channel.send('⌚ Please wait `' + MHSTime + ' hours` and try again.');
    return;
  }

  cooldownPlayers.set(message.author.id, new Date().getTime());

  /**Account Items */
  let items = await ItemsData.findOne({ userId: message.author.id });
  if (!items) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**Account Economy */
    let economy = await EconomyData.findOne({ userId: message.author.id });
    if (!economy) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**=== Account Stats ===*/
      let statistics = await StatsData.findOne({ userId: message.author.id });
      if (!statistics) return message.reply("❌ you don't have an account: `gcreate`");
      else {
        statistics.stats.nbhourly = statistics.stats.nbhourly += 1;
        statistics.save();
        /**Function Number Separate */
        function numStr(a, b) {
          a = '' + a;
          b = b || ' ';
          var c = '',
            d = 0;
          while (a.match(/^0[0-9]/)) {
            a = a.substr(1);
          }
          for (var i = a.length - 1; i >= 0; i--) {
            c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
            d++;
          }
          return c;
        }

        function randomItemFunction(max, min, nameItem, emojiItem, itemSection) {
          var randomItem = Math.floor(Math.random() * max) + min;

          if (itemSection === 'coinsSection') {
            economy.eco.money = economy.eco.money += randomItem;
            economy.save();
            return message.reply(`⌛Hourly - You gained: ${numStr(randomItem)}${emojiItem}, Have a nice day!`);
          }
          if (itemSection === 'chestSection') {
            economy.eco.chest = economy.eco.chest += randomItem;
            economy.save();
            return message.reply(`⌛Hourly - You gained: ${numStr(randomItem)}${emojiItem}, Have a nice day!`);
          }
          if (itemSection === 'rainbowSection') {
            items.mine.rainbow = items.mine.rainbow += randomItem;
            items.save();
            return message.reply(`⌛Hourly - You gained: ${numStr(randomItem)}${emojiItem}, Have a nice day!`);
          }
          if (itemSection === 'cloverSection') {
            items.farm.clover = items.farm.clover += randomItem;
            items.save();
            return message.reply(`⌛Hourly - You gained: ${numStr(randomItem)}${emojiItem}, Have a nice day!`);
          }
        }

        function main() {
          var randomItem = Math.random();
          if (randomItem < 0.37) {
            let coinsMax = economy.eco.businessvalue * 1.9;
            return randomItemFunction(coinsMax, 250, 'Coins', `${ConfigEmoji.economyEmoji.coins}`, 'coinsSection');
          }
          if (randomItem < 0.74) {
            return randomItemFunction(9, 1, 'Chest', `${ConfigEmoji.chest.magicChest}`, 'chestSection');
          }
          if (randomItem < 0.87) {
            return randomItemFunction(27, 2, 'Rainbow Ingot', `${ConfigEmoji.itemMineEmoji.rainbow}`, 'rainbowSection');
          }
          if (randomItem < 1) {
            return randomItemFunction(150, 25, 'Clover', `${ConfigEmoji.itemFarmEmoji.clover}`, 'cloverSection');
          }
        }
        main();
        const logChannel = client.channels.cache.get('584036562241585167');
        var now = new Date();
        var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        var messageEmbed = new Discord.MessageEmbed()
          .setColor('#1ED7E8')
          .setAuthor(`Log ${date}`)
          .setDescription(`[HOURLY] command by: ${client.users.cache.get(user.id).username}`);
        logChannel.send(messageEmbed);
      }
    }
  }
};

module.exports.info = {
  names: ['hourly'],
};
