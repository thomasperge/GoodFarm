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
    /**==== Function Embed Pickaxe ====*/
    function toolFunction(name, emoji, img, profit, oreUnlock) {
      if (oreUnlock.includes('S')) {
        var returnMessage = `Stone ${ConfigEmoji.itemMineEmoji.stone}`;
      }
      /**Minage Coal */
      if (oreUnlock.includes('C')) {
        var returnMessage = `Stone ${ConfigEmoji.itemMineEmoji.stone}\nCoal ${ConfigEmoji.itemMineEmoji.coal}`;
      }
      /**Minage Iron */
      if (oreUnlock.includes('I')) {
        var returnMessage = `Stone ${ConfigEmoji.itemMineEmoji.stone}\nCoal ${ConfigEmoji.itemMineEmoji.coal}\nIron ${ConfigEmoji.itemMineEmoji.iron}`;
      }
      /**Minage Gold */
      if (oreUnlock.includes('G')) {
        var returnMessage = `Stone ${ConfigEmoji.itemMineEmoji.stone}\nCoal ${ConfigEmoji.itemMineEmoji.coal}\nIron ${ConfigEmoji.itemMineEmoji.iron}\nGold ${ConfigEmoji.itemMineEmoji.gold}`;
      }
      /**Minage Diamond */
      if (oreUnlock.includes('D')) {
        var returnMessage = `Stone ${ConfigEmoji.itemMineEmoji.stone}\nCoal ${ConfigEmoji.itemMineEmoji.coal}\nIron ${ConfigEmoji.itemMineEmoji.iron}\nGold ${ConfigEmoji.itemMineEmoji.gold}\nDiamond ${ConfigEmoji.itemMineEmoji.diamond}`;
      }

      let toolEmbed = new Discord.MessageEmbed()
        .setColor('FFB500')
        .setAuthor(`${client.users.cache.get(user.id).username}'s pickaxe`, 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
        .setDescription(`📦 **${name}** ${emoji}\nMine Profit: x**${profit}**\n\n📦 **Ore unlock**:\n${returnMessage}\nRainbow ${ConfigEmoji.itemMineEmoji.rainbow}`)
        .setThumbnail(`${img}`)
        .setTimestamp();
      message.reply(toolEmbed);
    }
    function main() {
      if (tools.tool.pickaxe === 1) {
        return toolFunction('Wood Pickaxe', `${ConfigEmoji.pickaxeEmoji.woodPickaxe}`, `${ConfigEmoji.imgPickaxe.woodPickaxe}`, `${ConfigTool.Profit.toolslvl1_Profit}`, ['S', 'R']);
      }
      if (tools.tool.pickaxe === 2) {
        return toolFunction('Stone Pickaxe', `${ConfigEmoji.pickaxeEmoji.stonePickaxe}`, `${ConfigEmoji.imgPickaxe.stonePickaxe}`, `${ConfigTool.Profit.toolslvl2_Profit}`, ['S', 'C', 'R']);
      }
      if (tools.tool.pickaxe === 3) {
        return toolFunction('Iron Pickaxe', `${ConfigEmoji.pickaxeEmoji.ironPickaxe}`, `${ConfigEmoji.imgPickaxe.ironPickaxe}`, `${ConfigTool.Profit.toolslvl3_Profit}`, ['S', 'C', 'R']);
      }
      if (tools.tool.pickaxe === 4) {
        return toolFunction('Diamond Pickaxe', `${ConfigEmoji.pickaxeEmoji.diamondPickaxe}`, `${ConfigEmoji.imgPickaxe.diamondPickaxe}`, `${ConfigTool.Profit.toolslvl4_Profit}`, ['S', 'C', 'I', 'R']);
      }
      if (tools.tool.pickaxe === 5) {
        return toolFunction('Zodiac Pickaxe', `${ConfigEmoji.pickaxeEmoji.zodiacPickaxe}`, `${ConfigEmoji.imgPickaxe.zodiacPickaxe}`, `${ConfigTool.Profit.toolslvl5_Profit}`, ['S', 'C', 'I', 'G', 'R']);
      }
      if (tools.tool.pickaxe === 6) {
        return toolFunction('Ethernal Pickaxe', `${ConfigEmoji.pickaxeEmoji.ethernalPickaxe}`, `${ConfigEmoji.imgPickaxe.ethernalPickaxe}`, `${ConfigTool.Profit.toolslvl6_Profit}`, ['S', 'C', 'I', 'G', 'D', 'R']);
      }
      if (tools.tool.pickaxe === 7) {
        return toolFunction('Fire Pickaxe', `${ConfigEmoji.pickaxeEmoji.firePickaxe}`, `${ConfigEmoji.imgPickaxe.firePickaxe}`, `${ConfigTool.Profit.toolslvl7_Profit}`, ['S', 'C', 'I', 'G', 'D', 'R']);
      }
      if (tools.tool.pickaxe === 8) {
        return toolFunction('Magical Pickaxe', `${ConfigEmoji.pickaxeEmoji.magicalPickaxe}`, `${ConfigEmoji.imgPickaxe.magicalPickaxe}`, `${ConfigTool.Profit.toolslvl8_Profit}`, ['S', 'C', 'I', 'G', 'D', 'R']);
      }
      if (tools.tool.pickaxe === 9) {
        return toolFunction('Enchant Pickaxe', `${ConfigEmoji.pickaxeEmoji.enchantPickaxe}`, `${ConfigEmoji.imgPickaxe.enchantPickaxe}`, `${ConfigTool.Profit.toolslvl9_Profit}`, ['S', 'C', 'I', 'G', 'D', 'R']);
      }
      if (tools.tool.pickaxe === 10) {
        return toolFunction('Rainbow Pickaxe', `${ConfigEmoji.pickaxeEmoji.rainbowPickaxe}`, `${ConfigEmoji.imgPickaxe.rainbowPickaxe}`, `${ConfigTool.Profit.toolslvl10_Profit}`, ['S', 'C', 'I', 'G', 'D', 'R']);
      }
      if (tools.tool.pickaxe === 11) {
        return toolFunction('Rainbow FullArt Pickaxe', `${ConfigEmoji.pickaxeEmoji.rainbowFAPickaxe}`, `${ConfigEmoji.imgPickaxe.rainbowFAPickaxe}`, `${ConfigTool.Profit.toolslvl11_Profit}`, ['S', 'C', 'I', 'G', 'D', 'R']);
      }
    }
    main();
  }
};

module.exports.info = {
  names: ['pickaxe', 'pickaxes', 'mypickaxe'],
};
