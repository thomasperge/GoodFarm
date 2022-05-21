const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const ToolsData = require('../modules/tools.js');
const EconomyData = require('../modules/economy.js');
const StatsData = require('../modules/stats.js');
const ConfigEmoji = require('../config/configemoji.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;

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
        let statistics = await StatsData.findOne({ userId: message.author.id });
        if (!statistics) return message.reply("❌ you don't have an account: `gcreate`");
        else {
          /**==== Pickaxe Assignement ====*/
          if (tools.tool.pickaxe === 1) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.woodPickaxe}`;
            var namePickaxe = 'Wood Pickaxe';
          }
          if (tools.tool.pickaxe === 2) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.stonePickaxe}`;
            var namePickaxe = 'Stone Pickaxe';
          }
          if (tools.tool.pickaxe === 3) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.ironPickaxe}`;
            var namePickaxe = 'Iron Pickaxe';
          }
          if (tools.tool.pickaxe === 4) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.diamondPickaxe}`;
            var namePickaxe = 'Diamond Pickaxe';
          }
          if (tools.tool.pickaxe === 5) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.zodiacPickaxe}`;
            var namePickaxe = 'Zodiac Pickaxe';
          }
          if (tools.tool.pickaxe === 6) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.ethernalPickaxe}`;
            var namePickaxe = 'Ethernal Pickaxe';
          }
          if (tools.tool.pickaxe === 7) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.firePickaxe}`;
            var namePickaxe = 'Fire Pickaxe';
          }
          if (tools.tool.pickaxe === 8) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.magicalPickaxe}`;
            var namePickaxe = 'Magical Pickaxe';
          }
          if (tools.tool.pickaxe === 9) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.enchantPickaxe}`;
            var namePickaxe = 'Enchant Pickaxe';
          }
          if (tools.tool.pickaxe === 10) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.rainbowPickaxe}`;
            var namePickaxe = 'Rainbow Pickaxe';
          }
          if (tools.tool.pickaxe === 11) {
            var emojiPickaxe = `${ConfigEmoji.pickaxeEmoji.rainbowFAPickaxe}`;
            var namePickaxe = 'Rainbow FullArt Pickaxe';
          }

          /**==== Shovel Assignement ====*/
          if (tools.tool.shovel === 1) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.woodShovel}`;
            var nameShovel = 'Wood Shovel';
          }
          if (tools.tool.shovel === 2) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.stoneShovel}`;
            var nameShovel = 'Stone Shovel';
          }
          if (tools.tool.shovel === 3) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.ironShovel}`;
            var nameShovel = 'Iron Shovel';
          }
          if (tools.tool.shovel === 4) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.diamondShovel}`;
            var nameShovel = 'Diamond Shovel';
          }
          if (tools.tool.shovel === 5) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.zodiacShovel}`;
            var nameShovel = 'Zodiac Shovel';
          }
          if (tools.tool.shovel === 6) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.ethernalShovel}`;
            var nameShovel = 'Ethernal Shovel';
          }
          if (tools.tool.shovel === 7) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.fireShovel}`;
            var nameShovel = 'Fire Shovel';
          }
          if (tools.tool.shovel === 8) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.galaxyShovel}`;
            var nameShovel = 'Magical Shovel';
          }
          if (tools.tool.shovel === 9) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.enchantShovel}`;
            var nameShovel = 'Enchant Shovel';
          }
          if (tools.tool.shovel === 10) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.rainbowShovel}`;
            var nameShovel = 'Rainbow Shovel';
          }
          if (tools.tool.shovel === 11) {
            var emojiShovel = `${ConfigEmoji.shovelEmoji.rainbowFAShovel}`;
            var nameShovel = 'Rainbow FullArt Shovel';
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

          function main() {
            /**Command */
            var inventoryEmbed = new Discord.MessageEmbed()
              .setColor('#fc9803')
              .setAuthor(`${client.users.cache.get(user.id).username}'s Inventory`, 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
              .setDescription(`**Tools**: ${emojiShovel} ${emojiPickaxe}`)
              .addFields(
                { name: '**Info**:\n', value: `${ConfigEmoji.economyEmoji.coins} Money: ${numStr(economy.eco.money)}\n${ConfigEmoji.economyEmoji.coins} Business value: ${numStr(economy.eco.businessvalue)}\n🏷️ Profit: x${economy.eco.profit}\n`, inline: true },
                { name: '**Crops (1)**\n', value: `${ConfigEmoji.itemFarmEmoji.bush} Bush: ${items.farm.bush}\n${ConfigEmoji.itemFarmEmoji.wheat} Wheat: ${items.farm.wheat}\n${ConfigEmoji.itemFarmEmoji.corn} Corn: ${items.farm.corn}`, inline: true },
                { name: '**Crops (2)**\n', value: `${ConfigEmoji.itemFarmEmoji.potato} Potato: ${items.farm.potato}\n${ConfigEmoji.itemFarmEmoji.carrot} Carrot: ${items.farm.carrot}\n${ConfigEmoji.itemFarmEmoji.clover} Clover: ${items.farm.clover}`, inline: true },
                { name: '**Ore (1)**\n', value: `${ConfigEmoji.itemMineEmoji.stone} Stone: ${items.mine.stone}\n${ConfigEmoji.itemMineEmoji.coal} Coal: ${items.mine.coal}\n${ConfigEmoji.itemMineEmoji.iron} Iron: ${items.mine.iron}`, inline: true },
                { name: '**Ore (2)**\n', value: `${ConfigEmoji.itemMineEmoji.gold} Gols: ${items.mine.gold}\n${ConfigEmoji.itemMineEmoji.diamond} Diamond: ${items.mine.diamond}\n${ConfigEmoji.itemMineEmoji.rainbow} Rainbow: ${items.mine.rainbow}`, inline: true },
                { name: '**Other**', value: `${ConfigEmoji.economyEmoji.gem} Gems: ${economy.eco.gem}\n${ConfigEmoji.chest.magicChest}Chest: ${economy.eco.chest}`, inline: true },
                { name: '**Stats**', value: `Farms: ${statistics.stats.nbfarm}\nMines: ${statistics.stats.nbmine}\nChest open: ${statistics.stats.nbchest}\nHourly: ${statistics.stats.nbhourly}\nDaily: ${statistics.stats.nbdaily}\nRestart Game: ${statistics.stats.nbrestart}\n` }
              )
              .setFooter('© GoodFarm 2021 | gsupport')
              .setTimestamp();
            message.channel.send(inventoryEmbed);
          }
          main();
        }
      }
    }
  }
};

module.exports.info = {
  names: ['inventory', 'inv', 'i', 'inventaire'],
};
