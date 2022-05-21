const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const EconomyData = require('../modules/economy.js');
const ConfigPrices = require('../config/configressource.json');
const ConfigEmoji = require('../config/configemoji.json');
const config = require('../config.json');

/**Config Cooldown */
const shuffleTime = 3000;
var cooldownPlayers = new Discord.Collection();

module.exports.run = async (client, message, args) => {
  var user = message.author;

  /**=== Cooldown Commands: Sellall: 3s */
  if (cooldownPlayers.get(message.author.id) && new Date().getTime() - cooldownPlayers.get(message.author.id) < shuffleTime) {
    message.channel.send('⌚ Please wait `' + Math.ceil((shuffleTime - (new Date().getTime() - cooldownPlayers.get(message.author.id))) / 1000) + ' seconds` and try again.');
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
      function main() {
        /**==== Sell All Farm ====*/
        var priceBush = Math.floor(ConfigPrices.priceItems.bush * items.farm.bush);
        var priceWheat = Math.floor(ConfigPrices.priceItems.wheat * items.farm.wheat);
        var priceCorn = Math.floor(ConfigPrices.priceItems.corn * items.farm.corn);
        var pricePotato = Math.floor(ConfigPrices.priceItems.potato * items.farm.potato);
        var priceCarrot = Math.floor(ConfigPrices.priceItems.carrot * items.farm.carrot);
        var priceClover = Math.floor(ConfigPrices.priceItems.clover * items.farm.clover);
        /**Money */
        var totalSellFarm = priceBush + priceWheat + priceCorn + pricePotato + priceCarrot + priceClover;
        economy.eco.money = economy.eco.money += Math.floor(totalSellFarm * economy.eco.profit);

        /**Items */
        items.farm.bush = items.farm.bush -= items.farm.bush;
        items.farm.wheat = items.farm.wheat -= items.farm.wheat;
        items.farm.corn = items.farm.corn -= items.farm.corn;
        items.farm.potato = items.farm.potato -= items.farm.potato;
        items.farm.carrot = items.farm.carrot -= items.farm.carrot;
        items.farm.clover = items.farm.clover -= items.farm.clover;

        /**==== Sell All Mine ====*/
        var priceStone = Math.floor(ConfigPrices.priceItems.stone * items.mine.stone);
        var priceCoal = Math.floor(ConfigPrices.priceItems.coal * items.mine.coal);
        var priceIron = Math.floor(ConfigPrices.priceItems.iron * items.mine.iron);
        var priceGold = Math.floor(ConfigPrices.priceItems.gold * items.mine.gold);
        var priceDiamond = Math.floor(ConfigPrices.priceItems.diamond * items.mine.diamond);
        var priceRainbow = Math.floor(ConfigPrices.priceItems.rainbow * items.mine.rainbow);

        /**Money */
        var totalSellMine = priceStone + priceCoal + priceIron + priceGold + priceDiamond + priceRainbow;
        economy.eco.money = economy.eco.money += Math.floor(totalSellMine * economy.eco.profit);

        /**Items */
        items.mine.stone = items.mine.stone -= items.mine.stone;
        items.mine.coal = items.mine.coal -= items.mine.coal;
        items.mine.iron = items.mine.iron -= items.mine.iron;
        items.mine.gold = items.mine.gold -= items.mine.gold;
        items.mine.diamond = items.mine.diamond -= items.mine.diamond;
        items.mine.rainbow = items.mine.rainbow -= items.mine.rainbow;

        var total = Math.floor((totalSellFarm + totalSellMine) * economy.eco.profit);
        economy.eco.businessvalue = economy.eco.businessvalue += Math.floor(total / 3.85);
        message.reply(`Successfully sold everything for ${numStr(total)} ${ConfigEmoji.economyEmoji.coins} ! (profit: x**${economy.eco.profit}**)`);

        var randomChestVariable = Math.floor(Math.random() * 4) + 1; // returns a random integer from 1 to 4
        if (randomChestVariable === 2) {
          message.reply('Increase your profit with the command: `grestart`');
        }

        const logChannel = client.channels.cache.get('584036562241585167');
        var now = new Date();
        var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        var messageEmbed = new Discord.MessageEmbed()
          .setColor('#ECCC09')
          .setAuthor(`Log ${date}`)
          .setDescription(`[SELLALL] command by: ${client.users.cache.get(user.id).username}\nSelling Earning: ${total}`);
        logChannel.send(messageEmbed);
      }

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

      main();
      items.save();
      economy.save();
    }
  }
};

module.exports.info = {
  names: ['sellall', 'sa'],
};
