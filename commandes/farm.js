const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const ShovelData = require('../modules/tools.js');
const EconomyData = require('../modules/economy.js');
const ConfigProfit = require('../config/configtools.json');
const ConfigEmoji = require('../config/configemoji.json');
const StatsData = require('../modules/stats.js');
const config = require('../config.json');
/**Config Cooldown */
const shuffleTime = 5000;
var cooldownPlayers = new Discord.Collection();

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**=== Cooldown Commands: Farm: 5s */
  if (cooldownPlayers.get(message.author.id) && new Date().getTime() - cooldownPlayers.get(message.author.id) < shuffleTime) {
    message.channel.send('⌚ Please wait `' + Math.ceil((shuffleTime - (new Date().getTime() - cooldownPlayers.get(message.author.id))) / 1000) + ' seconds` and try again.');
    return;
  }
  cooldownPlayers.set(message.author.id, new Date().getTime());

  /**Account Economy */
  let economy = await EconomyData.findOne({ userId: message.author.id });
  if (!economy) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**== Account Items ==*/
    let crops = await ItemsData.findOne({ userId: message.author.id });
    if (!crops) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**== Account Tool (Shovel) ==*/
      let tools = await ShovelData.findOne({ userId: message.author.id });
      if (!tools) return message.reply("❌ you don't have an account: `gcreate`");
      else {
        /**=== Account Stats ===*/
        let statistics = await StatsData.findOne({ userId: message.author.id });
        if (!statistics) return message.reply("❌ you don't have an account: `gcreate`");
        else {
          /**==== FARM FUNCTION ====*/
          function farmFunction(cropsID, profit, emoji) {
            /**Farm Bush */
            if (cropsID.includes('B')) {
              var max = 26;
              var randomBush = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.5);
              crops.farm.bush = crops.farm.bush += randomBush;
              var returnMessage = `${randomBush} ${ConfigEmoji.itemFarmEmoji.bush}`;
            }
            /**Farm Wheat */
            if (cropsID.includes('W')) {
              var max = 16;
              var randomWheat = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.4);
              crops.farm.wheat = crops.farm.wheat += randomWheat;
              var returnMessage = `${randomBush} ${ConfigEmoji.itemFarmEmoji.bush}, ${randomWheat} ${ConfigEmoji.itemFarmEmoji.wheat}`;
            }
            /**Farm Corn */
            if (cropsID.includes('CO')) {
              var max = 12;
              var randomCorn = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.3);
              crops.farm.corn = crops.farm.corn += randomCorn;
              var returnMessage = `${randomBush} ${ConfigEmoji.itemFarmEmoji.bush}, ${randomWheat} ${ConfigEmoji.itemFarmEmoji.wheat}, ${randomCorn} ${ConfigEmoji.itemFarmEmoji.corn}`;
            }
            /**Farm Potato */
            if (cropsID.includes('P')) {
              var max = 8;
              var randomPotato = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.2);
              crops.farm.potato = crops.farm.potato += randomPotato;
              var returnMessage = `${randomBush} ${ConfigEmoji.itemFarmEmoji.bush}, ${randomWheat} ${ConfigEmoji.itemFarmEmoji.wheat}, ${randomCorn} ${ConfigEmoji.itemFarmEmoji.corn}, ${randomPotato} ${ConfigEmoji.itemFarmEmoji.potato}`;
            }
            /**Farm Carrot */
            if (cropsID.includes('CA')) {
              var max = 5;
              var randomCarrot = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.1);
              crops.farm.carrot = crops.farm.carrot += randomCarrot;
              var returnMessage = `${randomBush} ${ConfigEmoji.itemFarmEmoji.bush}, ${randomWheat} ${ConfigEmoji.itemFarmEmoji.wheat}, ${randomCorn} ${ConfigEmoji.itemFarmEmoji.corn}, ${randomPotato} ${ConfigEmoji.itemFarmEmoji.potato}, ${randomCarrot} ${ConfigEmoji.itemFarmEmoji.carrot} `;
            }
            /**Farm Clover */
            if (cropsID.includes('CL')) {
              var ratio = 3.8;
              var randomClover = Math.floor((Math.random() * ratio * (profit / 1.3)) / 3);
              crops.farm.clover = crops.farm.clover += randomClover;
            }

            message.reply(`» You farm: ${returnMessage}, ${randomClover} ${ConfigEmoji.itemFarmEmoji.clover} with your ${emoji}`);

            var randomVariable = Math.floor(Math.random() * 14) + 1; // returns a random integer from 1 to 14
            if (randomVariable === 2) {
              randomChest();
            } else if (randomVariable === 1) {
              randomMessageRestart();
            }

            randomBusinessValue();

            const logChannel = client.channels.cache.get('584036562241585167');
            var now = new Date();
            var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
            var messageEmbed = new Discord.MessageEmbed()
              .setColor('#ECCC09')
              .setAuthor(`Log ${date}`)
              .setDescription(`[FARM] command by: ${client.users.cache.get(user.id).username}\nItem: ${returnMessage}, ${randomClover} ${ConfigEmoji.itemFarmEmoji.clover}\nTool: ${emoji} (profit: x${economy.eco.profit})`);
            logChannel.send(messageEmbed);
          }

          /**==== CHEST FUNCTION ====*/
          function randomChest() {
            economy.eco.chest = economy.eco.chest += 1;
            message.reply(`you drop a chest! +1${ConfigEmoji.chest.magicChest}`);
          }

          /**==== MESSAGE FUNCTION ====*/
          function randomMessageRestart() {
            message.reply('Increase your profit with the command: `grestart`');
          }

          /**==== BUSINESSVALUE FUNCTION ====*/
          function randomBusinessValue() {
            var randomBusinessValue = Math.floor(Math.random() * 9);
            economy.eco.businessvalue = economy.eco.businessvalue += randomBusinessValue;
          }

          function main() {
            if (tools.tool.shovel === 1) {
              var profitShovel = ConfigProfit.Profit.toolslvl1_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.woodShovel}`;
              var cropsUnlock = ['B', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Stone */
            if (tools.tool.shovel === 2) {
              var profitShovel = ConfigProfit.Profit.toolslvl2_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.stoneShovel}`;
              var cropsUnlock = ['B', 'W', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Iron */
            if (tools.tool.shovel === 3) {
              var profitShovel = ConfigProfit.Profit.toolslvl3_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.ironShovel}`;
              var cropsUnlock = ['B', 'W', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Diamond */
            if (tools.tool.shovel === 4) {
              var profitShovel = ConfigProfit.Profit.toolslvl4_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.diamondShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Zodiac */
            if (tools.tool.shovel === 5) {
              var profitShovel = ConfigProfit.Profit.toolslvl5_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.zodiacShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Ethernal */
            if (tools.tool.shovel === 6) {
              var profitShovel = ConfigProfit.Profit.toolslvl6_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.ethernalShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CA', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Fire */
            if (tools.tool.shovel === 7) {
              var profitShovel = ConfigProfit.Profit.toolslvl7_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.fireShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CA', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Galaxy */
            if (tools.tool.shovel === 8) {
              var profitShovel = ConfigProfit.Profit.toolslvl8_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.galaxyShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CA', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Enchant */
            if (tools.tool.shovel === 9) {
              var profitShovel = ConfigProfit.Profit.toolslvl9_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.enchantShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CA', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Rainbow */
            if (tools.tool.shovel === 10) {
              var profitShovel = ConfigProfit.Profit.toolslvl10_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.rainbowShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CA', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
            /**Shovel Rainbow FA */
            if (tools.tool.shovel === 11) {
              var profitShovel = ConfigProfit.Profit.toolslvl11_Profit;
              var emojiShovel = `${ConfigEmoji.shovelEmoji.rainbowFAShovel}`;
              var cropsUnlock = ['B', 'W', 'CO', 'P', 'CA', 'CL'];
              return farmFunction(cropsUnlock, profitShovel, emojiShovel);
            }
          }

          main();
          economy.save();
          crops.save();
          statistics.stats.nbfarm = statistics.stats.nbfarm += 1;
          statistics.save();
        }
      }
    }
  }
};

module.exports.info = {
  names: ['farm', 'f'],
};
