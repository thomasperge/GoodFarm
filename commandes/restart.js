const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const ToolsData = require('../modules/tools.js');
const EconomyData = require('../modules/economy.js');
const ConfigEmoji = require('../config/configemoji.json');
const StatsData = require('../modules/stats.js');
const config = require('../config.json');

/**Config Cooldown */
const shuffleTime = 8.64e8;
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

  /**=== Account Tools ===*/
  let tools = await ToolsData.findOne({ userId: message.author.id });
  if (!tools) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**=== Account Items ===*/
    let items = await ItemsData.findOne({ userId: message.author.id });
    if (!items) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**=== Account Economy ===*/
      let economy = await EconomyData.findOne({ userId: message.author.id });
      if (!economy) return message.reply("❌ you don't have an account: `gcreate`");
      else {
        /**=== Account Stats ===*/
        let statistic = await StatsData.findOne({ userId: message.author.id });
        if (!statistic) return message.reply("❌ you don't have an account: `gcreate`");
        else {
          /**==== 185,000$ to Restart =====*/
          if (economy.eco.businessvalue < 250000) return message.reply('❌ obtain 200,000$ of Business Value to restart...!');
          else {
            /**======= Command Restart =======*/
            var profitBetaBusiness = economy.eco.businessvalue; // MIN 185,000
            var profit = profitBetaBusiness / 399.998 / 151;

            function arrondiFunction(nombre) {
              profit = nombre * 100; // 556.845
              profit = Math.round(profit); // 556
              profit = profit / 100;
              return profit;
            }

            function main() {
              message.reply('You restart the game with a profit of: x**' + arrondiFunction(profit) + `**\nCongratulation ! (+ 10 chest ${ConfigEmoji.chest.magicChest})`);
              statistic.stats.nbrestart = statistic.stats.nbrestart += 1;
              statistic.save();

              /**=== Economy ===*/
              economy.eco.money = 0;
              economy.eco.gem = 0;
              economy.eco.chest = economy.eco.chest += 10;
              economy.eco.businessvalue = 0;
              let economyProfit = Math.floor(economy.eco.profit);
              economy.eco.profit = economyProfit + arrondiFunction(profit);
              economy.save();
              /**=== Tools ===*/
              tools.tool.pickaxe = 1;
              tools.tool.shovel = 1;
              tools.tool.generator = 0;
              tools.save();
              /**=== Item ===*/
              /**Farm */
              items.farm.bush = 0;
              items.farm.wheat = 0;
              items.farm.corn = 0;
              items.farm.potato = 0;
              items.farm.carrot = 0;
              items.farm.clover = 0;
              /**Mine */
              items.mine.stone = 0;
              items.mine.coal = 0;
              items.mine.iron = 0;
              items.mine.gold = 0;
              items.mine.diamond = 0;
              items.mine.rainbow = 0;
              items.save();
            }
            main();
            const logChannel = client.channels.cache.get('584036562241585167');
            var now = new Date();
            var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
            var messageEmbed = new Discord.MessageEmbed()
              .setColor('#E609EC')
              .setAuthor(`Log ${date}`)
              .setDescription(`[RESTART DONE] command by: ${client.users.cache.get(user.id).username}`);
            logChannel.send(messageEmbed);
          }
        }
      }
    }
  }
};

module.exports.info = {
  names: ['restart', 'rs', 'reload', 'rt'],
};
