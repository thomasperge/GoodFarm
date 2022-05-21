const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const PickaxeData = require('../modules/tools.js');
const EconomyData = require('../modules/economy.js');
const ConfigProfit = require('../config/configtools.json');
const ConfigEmoji = require('../config/configemoji.json');
const StatsData = require('../modules/stats.js');
/**Config Cooldown */
const shuffleTime = 5000;
var cooldownPlayers = new Discord.Collection();

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**=== Cooldown Commands: Mine: 5s */
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
    let ore = await ItemsData.findOne({ userId: message.author.id });
    if (!ore) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**== Account Tool (Pickaxe) ==*/
      let tools = await PickaxeData.findOne({ userId: message.author.id });
      if (!tools) return message.reply("❌ you don't have an account: `gcreate`");
      else {
        /**=== Account Stats ===*/
        let statistics = await StatsData.findOne({ userId: message.author.id });
        if (!statistics) return message.reply("❌ you don't have an account: `gcreate`");
        else {
          function mineFunction(cropsID, profit, emoji) {
            // ==== MINAGE ITEMS RANDOM ====
            /**Minage Stone */
            if (cropsID.includes('S')) {
              var max = 20;
              var randomStone = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.5);
              ore.mine.stone = ore.mine.stone += randomStone;
              var returnMessage = `${randomStone} ${ConfigEmoji.itemMineEmoji.stone}`;
            }
            /**Minage Coal */
            if (cropsID.includes('C')) {
              var max = 12;
              var randomCoal = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.4);
              ore.mine.coal = ore.mine.coal += randomCoal;
              var returnMessage = `${randomStone} ${ConfigEmoji.itemMineEmoji.stone}, ${randomCoal} ${ConfigEmoji.itemMineEmoji.coal}`;
            }
            /**Minage Iron */
            if (cropsID.includes('I')) {
              var max = 9;
              var randomIron = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.3);
              ore.mine.iron = ore.mine.iron += randomIron;
              var returnMessage = `${randomStone} ${ConfigEmoji.itemMineEmoji.stone}, ${randomCoal} ${ConfigEmoji.itemMineEmoji.coal}, ${randomIron} ${ConfigEmoji.itemMineEmoji.iron}`;
            }
            /**Minage Gold */
            if (cropsID.includes('G')) {
              var max = 5;
              var randomGold = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.2);
              ore.mine.gold = ore.mine.gold += randomGold;
              var returnMessage = `${randomStone} ${ConfigEmoji.itemMineEmoji.stone}, ${randomCoal} ${ConfigEmoji.itemMineEmoji.coal}, ${randomIron} ${ConfigEmoji.itemMineEmoji.iron}, ${randomGold} ${ConfigEmoji.itemMineEmoji.gold}`;
            }
            /**Minage Diamond */
            if (cropsID.includes('D')) {
              var max = 2;
              var randomDiamond = Math.floor(Math.random() * max * profit) + Math.floor(profit * 1.1);
              ore.mine.diamond = ore.mine.diamond += randomDiamond;
              var returnMessage = `${randomStone} ${ConfigEmoji.itemMineEmoji.stone}, ${randomCoal} ${ConfigEmoji.itemMineEmoji.coal}, ${randomIron} ${ConfigEmoji.itemMineEmoji.iron}, ${randomGold} ${ConfigEmoji.itemMineEmoji.gold}, ${randomDiamond} ${ConfigEmoji.itemMineEmoji.diamond}`;
            }
            /**Minage Rainbow */
            if (cropsID.includes('R')) {
              var ratio = 2;
              var randomRainbow = Math.floor((Math.random() * ratio * (profit / 1.6)) / 4);
              ore.mine.rainbow = ore.mine.rainbow += randomRainbow;
            }

            message.reply(`» You mine: ${returnMessage}, ${randomRainbow} ${ConfigEmoji.itemMineEmoji.rainbow} with your ${emoji}`);

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
              .setDescription(`[MINE] command by: ${client.users.cache.get(user.id).username}\nItem: ${returnMessage}, ${randomRainbow} ${ConfigEmoji.itemMineEmoji.rainbow}\nTool: ${emoji} (profit: x${economy.eco.profit})`);
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
            var randomBusinessValue = Math.floor(Math.random() * 11);
            economy.eco.businessvalue = economy.eco.businessvalue += randomBusinessValue;
          }

          function main() {
            if (tools.tool.pickaxe === 1) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl1_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.woodPickaxe}`;
              var oreUnlock = ['S', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Stone */
            if (tools.tool.pickaxe === 2) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl2_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.stonePickaxe}`;
              var oreUnlock = ['S', 'C', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Iron */
            if (tools.tool.pickaxe === 3) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl3_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.ironPickaxe}`;
              var oreUnlock = ['S', 'C', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe DIamond */
            if (tools.tool.pickaxe === 4) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl4_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.diamondPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Zodiac */
            if (tools.tool.pickaxe === 5) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl5_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.zodiacPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Ethernal */
            if (tools.tool.pickaxe === 6) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl6_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.ethernalPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'D', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Fire */
            if (tools.tool.pickaxe === 7) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl7_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.firePickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'D', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Magical */
            if (tools.tool.pickaxe === 8) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl8_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.magicalPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'D', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Enchant */
            if (tools.tool.pickaxe === 9) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl9_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.enchantPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'D', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Rainbow */
            if (tools.tool.pickaxe === 10) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl10_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.rainbowPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'D', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
            /**Pickaxe Rainbow FA */
            if (tools.tool.pickaxe === 11) {
              var profitPickaxe = ConfigProfit.Profit.toolslvl11_Profit;
              var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.rainbowFAPickaxe}`;
              var oreUnlock = ['S', 'C', 'I', 'G', 'D', 'R'];
              return mineFunction(oreUnlock, profitPickaxe, emojiPickaxe);
            }
          }

          main();
          economy.save();
          ore.save();
          statistics.stats.nbmine = statistics.stats.nbmine += 1;
          statistics.save();
        }
      }
    }
  }
};

module.exports.info = {
  names: ['mine', 'm'],
};
