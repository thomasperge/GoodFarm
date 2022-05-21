const Discord = require('discord.js');
const ConfigEmoji = require('../config/configemoji.json');
const ToolsData = require('../modules/tools.js');
const ConfigTool = require('../config/configtools.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**Account Tools */
  let tools = await ToolsData.findOne({ userId: message.author.id });
  if (!tools) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**==== Function Embed shovel ====*/
    function toolFunction(name, emoji, img, profit, oreUnlock) {
      if (oreUnlock.includes('B')) {
        var returnMessage = `Bush ${ConfigEmoji.itemFarmEmoji.bush}`;
      }
      /**Minage Coal */
      if (oreUnlock.includes('W')) {
        var returnMessage = `Bush ${ConfigEmoji.itemFarmEmoji.bush}\nWheat ${ConfigEmoji.itemFarmEmoji.wheat}`;
      }
      /**Minage Iron */
      if (oreUnlock.includes('CO')) {
        var returnMessage = `Bush ${ConfigEmoji.itemFarmEmoji.bush}\nWheat ${ConfigEmoji.itemFarmEmoji.wheat}\nCorn ${ConfigEmoji.itemFarmEmoji.corn}`;
      }
      /**Minage Gold */
      if (oreUnlock.includes('P')) {
        var returnMessage = `Bush ${ConfigEmoji.itemFarmEmoji.bush}\nWheat ${ConfigEmoji.itemFarmEmoji.wheat}\nCorn ${ConfigEmoji.itemFarmEmoji.corn}\nPotato ${ConfigEmoji.itemFarmEmoji.potato}`;
      }
      /**Minage Diamond */
      if (oreUnlock.includes('CA')) {
        var returnMessage = `Bush ${ConfigEmoji.itemFarmEmoji.bush}\nWheat ${ConfigEmoji.itemFarmEmoji.wheat}\nCorn ${ConfigEmoji.itemFarmEmoji.corn}\nPotato ${ConfigEmoji.itemFarmEmoji.potato}\nCarrot ${ConfigEmoji.itemFarmEmoji.carrot}`;
      }

      let toolEmbed = new Discord.MessageEmbed()
        .setColor('FFB500')
        .setAuthor(`${client.users.cache.get(user.id).username}'s shovel`, 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
        .setDescription(`📦 **${name}** ${emoji}\nFarm Profit: x**${profit}**\n\n📦 **Crops unlock**:\n${returnMessage}\nClover ${ConfigEmoji.itemFarmEmoji.clover}`)
        .setThumbnail(`${img}`)
        .setTimestamp();
      message.reply(toolEmbed);
    }

    function main() {
      if (tools.tool.shovel === 1) {
        return toolFunction('Wood Shovel', `${ConfigEmoji.shovelEmoji.woodShovel}`, `${ConfigEmoji.imgShovel.woodShovel}`, `${ConfigTool.Profit.toolslvl1_Profit}`, ['B', 'CL']);
      }
      if (tools.tool.shovel === 2) {
        return toolFunction('Stone Shovel', `${ConfigEmoji.shovelEmoji.stoneShovel}`, `${ConfigEmoji.imgShovel.stoneShovel}`, `${ConfigTool.Profit.toolslvl2_Profit}`, ['B', 'W', 'CL']);
      }
      if (tools.tool.shovel === 3) {
        return toolFunction('Iron Shovel', `${ConfigEmoji.shovelEmoji.ironShovel}`, `${ConfigEmoji.imgShovel.ironShovel}`, `${ConfigTool.Profit.toolslvl3_Profit}`, ['B', 'W', 'CL']);
      }
      if (tools.tool.shovel === 4) {
        return toolFunction('Diamond Shovel', `${ConfigEmoji.shovelEmoji.diamondShovel}`, `${ConfigEmoji.imgShovel.diamondShovel}`, `${ConfigTool.Profit.toolslvl4_Profit}`, ['B', 'W', 'CO', 'CL']);
      }
      if (tools.tool.shovel === 5) {
        return toolFunction('Zodiac Shovel', `${ConfigEmoji.shovelEmoji.zodiacShovel}`, `${ConfigEmoji.imgShovel.zodiacShovel}`, `${ConfigTool.Profit.toolslvl5_Profit}`, ['B', 'W', 'CO', 'P', 'CL']);
      }
      if (tools.tool.shovel === 6) {
        return toolFunction('Ethernal Shovel', `${ConfigEmoji.shovelEmoji.ethernalShovel}`, `${ConfigEmoji.imgShovel.ethernalShovel}`, `${ConfigTool.Profit.toolslvl6_Profit}`, ['B', 'W', 'CO', 'P', 'CA', 'CL']);
      }
      if (tools.tool.shovel === 7) {
        return toolFunction('Fire Shovel', `${ConfigEmoji.shovelEmoji.fireShovel}`, `${ConfigEmoji.imgShovel.fireShovel}`, `${ConfigTool.Profit.toolslvl7_Profit}`, ['B', 'W', 'CO', 'P', 'CA', 'CL']);
      }
      if (tools.tool.shovel === 8) {
        return toolFunction('Galaxy Shovel', `${ConfigEmoji.shovelEmoji.galaxyShovel}`, `${ConfigEmoji.imgShovel.galaxyShovel}`, `${ConfigTool.Profit.toolslvl8_Profit}`, ['B', 'W', 'CO', 'P', 'CA', 'CL']);
      }
      if (tools.tool.shovel === 9) {
        return toolFunction('Enchant Shovel', `${ConfigEmoji.shovelEmoji.enchantShovel}`, `${ConfigEmoji.imgShovel.enchantShovel}`, `${ConfigTool.Profit.toolslvl9_Profit}`, ['B', 'W', 'CO', 'P', 'CA', 'CL']);
      }
      if (tools.tool.shovel === 10) {
        return toolFunction('Rainbow Shovel', `${ConfigEmoji.shovelEmoji.rainbowShovel}`, `${ConfigEmoji.imgShovel.rainbowShovel}`, `${ConfigTool.Profit.toolslvl10_Profit}`, ['B', 'W', 'CO', 'P', 'CA', 'CL']);
      }
      if (tools.tool.shovel === 11) {
        return toolFunction('Rainbow FullArt Shovel', `${ConfigEmoji.shovelEmoji.rainbowFAShovel}`, `${ConfigEmoji.imgShovel.rainbowFAShovel}`, `${ConfigTool.Profit.toolslvl11_Profit}`, ['B', 'W', 'CO', 'P', 'CA', 'CL']);
      }
    }
    main();
  }
};

module.exports.info = {
  names: ['shovel', 'shovels', 'myshovel'],
};
