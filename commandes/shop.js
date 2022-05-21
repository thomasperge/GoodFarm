const Discord = require('discord.js');
const ToolsData = require('../modules/tools.js');
const ConfigEmoji = require('../config/configemoji.json');
const ConfigPrice = require('../config/configtools.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**Account Tools */
  let tools = await ToolsData.findOne({ userId: message.author.id });
  if (!tools) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**Command */
    if ((args[0] === 'pickaxe') | (args[0] === 'Pickaxe')) {
      /**====== Pickaxe ======*/
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

      if (tools.tool.pickaxe >= 1) {
        var toolName1 = `${ConfigEmoji.pickaxeEmoji.woodPickaxe} ~~**Wood Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl1_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName1 = `${ConfigEmoji.pickaxeEmoji.stonePickaxe} **Wood Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl1_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 2) {
        var toolName2 = `${ConfigEmoji.pickaxeEmoji.stonePickaxe} ~~**Stone Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl2_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName2 = `${ConfigEmoji.pickaxeEmoji.stonePickaxe} **Stone Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl2_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 3) {
        var toolName3 = `${ConfigEmoji.pickaxeEmoji.ironPickaxe} ~~**Iron Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl3_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName3 = `${ConfigEmoji.pickaxeEmoji.ironPickaxe} **Iron Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl3_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 4) {
        var toolName4 = `${ConfigEmoji.pickaxeEmoji.diamondPickaxe} ~~**Diamond Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl4_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName4 = `${ConfigEmoji.pickaxeEmoji.diamondPickaxe} **Diamond Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl4_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 5) {
        var toolName5 = `${ConfigEmoji.pickaxeEmoji.zodiacPickaxe} ~~**Zodiac Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl5_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName5 = `${ConfigEmoji.pickaxeEmoji.zodiacPickaxe} **Zodiac Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl5_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 6) {
        var toolName6 = `${ConfigEmoji.pickaxeEmoji.ethernalPickaxe} ~~**Ethernal Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl6_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName6 = `${ConfigEmoji.pickaxeEmoji.ethernalPickaxe} **Ethernal Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl6_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 7) {
        var toolName7 = `${ConfigEmoji.pickaxeEmoji.firePickaxe} ~~**Fire Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl7_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName7 = `${ConfigEmoji.pickaxeEmoji.firePickaxe} **Fire Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl7_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.pickaxe >= 8) {
        var toolName8 = `${ConfigEmoji.pickaxeEmoji.magicalPickaxe} ~~**Magical Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl8_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName8 = `${ConfigEmoji.pickaxeEmoji.magicalPickaxe} **Magical Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl8_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.pickaxe >= 9) {
        var toolName9 = `${ConfigEmoji.pickaxeEmoji.enchantPickaxe} ~~**Enchant Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl9_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName9 = `${ConfigEmoji.pickaxeEmoji.enchantPickaxe} **Enchant Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl9_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.pickaxe >= 10) {
        var toolName10 = `${ConfigEmoji.pickaxeEmoji.rainbowPickaxe} ~~**Rainbow Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl10_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName10 = `${ConfigEmoji.pickaxeEmoji.rainbowPickaxe} **Rainbow Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl10_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.pickaxe >= 11) {
        var toolName11 = `${ConfigEmoji.pickaxeEmoji.rainbowFAPickaxe} ~~**Rainbow FullArt Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl11_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName11 = `${ConfigEmoji.pickaxeEmoji.rainbowFAPickaxe} **Rainbow FullArt Pickaxe** - ${numStr(ConfigPrice.Price.toolslvl11_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      var shopPickaxeEmbed = new Discord.MessageEmbed()
        .setColor('E03636')
        .setAuthor('Tool Shop - Pickaxe', 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
        .addFields({ name: '**Money**', value: `${toolName1}\n${toolName2}\n${toolName3}\n${toolName4}\n${toolName5}\n${toolName6}\n${toolName7}`, inline: true }, { name: '**Other**', value: `${toolName8}\n${toolName9}\n${toolName10}\n${toolName11}`, inline: true })
        .setTimestamp()
        .setFooter('GoodFarm 2021 | ');
      return message.channel.send(shopPickaxeEmbed);
    } else if ((args[0] === 'shovel') | (args[0] === 'Shovel')) {
      /**====== Shovel ======*/
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

      /**Shovel */
      if (tools.tool.shovel >= 1) {
        var toolName1 = `${ConfigEmoji.shovelEmoji.woodShovel} ~~**Wood Shovel** - ${numStr(ConfigPrice.Price.toolslvl1_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName1 = `${ConfigEmoji.shovelEmoji.stoneShovel} **Wood Shovel** - ${numStr(ConfigPrice.Price.toolslvl1_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 2) {
        var toolName2 = `${ConfigEmoji.shovelEmoji.stoneShovel} ~~**Stone Shovel** - ${numStr(ConfigPrice.Price.toolslvl2_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName2 = `${ConfigEmoji.shovelEmoji.stoneShovel} **Stone Shovel** - ${numStr(ConfigPrice.Price.toolslvl2_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 3) {
        var toolName3 = `${ConfigEmoji.shovelEmoji.ironShovel} ~~**Iron Shovel** - ${numStr(ConfigPrice.Price.toolslvl3_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName3 = `${ConfigEmoji.shovelEmoji.ironShovel} **Iron Shovel** - ${numStr(ConfigPrice.Price.toolslvl3_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 4) {
        var toolName4 = `${ConfigEmoji.shovelEmoji.diamondShovel} ~~**Diamond Shovel** - ${numStr(ConfigPrice.Price.toolslvl4_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName4 = `${ConfigEmoji.shovelEmoji.diamondShovel} **Diamond Shovel** - ${numStr(ConfigPrice.Price.toolslvl4_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 5) {
        var toolName5 = `${ConfigEmoji.shovelEmoji.zodiacShovel} ~~**Zodiac Shovel** - ${numStr(ConfigPrice.Price.toolslvl5_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName5 = `${ConfigEmoji.shovelEmoji.zodiacShovel} **Zodiac Shovel** - ${numStr(ConfigPrice.Price.toolslvl5_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 6) {
        var toolName6 = `${ConfigEmoji.shovelEmoji.ethernalShovel} ~~**Ethernal Shovel** - ${numStr(ConfigPrice.Price.toolslvl6_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName6 = `${ConfigEmoji.shovelEmoji.ethernalShovel} **Ethernal Shovel** - ${numStr(ConfigPrice.Price.toolslvl6_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 7) {
        var toolName7 = `${ConfigEmoji.shovelEmoji.fireShovel} ~~**Fire Shovel** - ${numStr(ConfigPrice.Price.toolslvl7_Price)}${ConfigEmoji.economyEmoji.coins}~~`;
      } else {
        var toolName7 = `${ConfigEmoji.shovelEmoji.fireShovel} **Fire Shovel** - ${numStr(ConfigPrice.Price.toolslvl7_Price)}${ConfigEmoji.economyEmoji.coins}`;
      }
      if (tools.tool.shovel >= 8) {
        var toolName8 = `${ConfigEmoji.shovelEmoji.galaxyShovel} ~~**Galaxy Shovel** - ${numStr(ConfigPrice.Price.toolslvl8_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName8 = `${ConfigEmoji.shovelEmoji.galaxyShovel} **Galaxy Shovel** - ${numStr(ConfigPrice.Price.toolslvl8_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.shovel >= 9) {
        var toolName9 = `${ConfigEmoji.shovelEmoji.enchantShovel} ~~**Enchant Shovel** - ${numStr(ConfigPrice.Price.toolslvl9_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName9 = `${ConfigEmoji.shovelEmoji.enchantShovel} **Enchant Shovel** - ${numStr(ConfigPrice.Price.toolslvl9_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.shovel >= 10) {
        var toolName10 = `${ConfigEmoji.shovelEmoji.rainbowShovel} ~~**Rainbow Shovel** - ${numStr(ConfigPrice.Price.toolslvl10_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName10 = `${ConfigEmoji.shovelEmoji.rainbowShovel} **Rainbow Shovel** - ${numStr(ConfigPrice.Price.toolslvl10_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.shovel >= 11) {
        var toolName11 = `${ConfigEmoji.shovelEmoji.rainbowFAShovel} ~~**Rainbow FullArt Shovel** - ${numStr(ConfigPrice.Price.toolslvl11_Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName11 = `${ConfigEmoji.shovelEmoji.rainbowFAShovel} **Rainbow FullArt Shovel** - ${numStr(ConfigPrice.Price.toolslvl11_Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      var shopPickaxeEmbed = new Discord.MessageEmbed()
        .setColor('E03636')
        .setAuthor('Tool Shop - Shovel', 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
        .addFields({ name: '**Money**', value: `${toolName1}\n${toolName2}\n${toolName3}\n${toolName4}\n${toolName5}\n${toolName6}\n${toolName7}`, inline: true }, { name: '**Other**', value: `${toolName8}\n${toolName9}\n${toolName10}\n${toolName11}`, inline: true })
        .setTimestamp()
        .setFooter('GoodFarm 2021 | ');
      return message.channel.send(shopPickaxeEmbed);
    } else if ((args[0] === 'generator') | (args[0] === 'gen')) {
      /**====== Generator ======*/
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
      if (tools.tool.generator >= 1) {
        var toolName1 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 1** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_1Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName1 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 1** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_1Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.generator >= 2) {
        var toolName2 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 2** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_2Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName2 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 2** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_2Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.generator >= 3) {
        var toolName3 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 3** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_3Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName3 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 3** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_3Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.generator >= 4) {
        var toolName4 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 4** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_4Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName4 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 4** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_4Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.generator >= 5) {
        var toolName5 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 5** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_5Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName5 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 5** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_5Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.generator >= 6) {
        var toolName6 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 6** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_6Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName6 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 6** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_6Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      if (tools.tool.generator >= 7) {
        var toolName7 = `${ConfigEmoji.economyEmoji.generatorEmoji} ~~**Generator lvl 7** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_7Price)}${ConfigEmoji.economyEmoji.gem}~~`;
      } else {
        var toolName7 = `${ConfigEmoji.economyEmoji.generatorEmoji} **Generator lvl 7** - ${numStr(ConfigPrice.PriceGenerator.generatorlvl_7Price)}${ConfigEmoji.economyEmoji.gem}`;
      }
      var shopGeneratorEmbed = new Discord.MessageEmbed()
        .setColor('E03636')
        .setAuthor('Tool Shop - Generator', 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
        .addFields({ name: '**Money**', value: `${toolName1}\n${toolName2}\n${toolName3}\n${toolName4}\n${toolName5}\n${toolName6}\n${toolName7}`, inline: true })
        .setTimestamp()
        .setFooter('GoodFarm 2021 | ');
      return message.channel.send(shopGeneratorEmbed);
    } else {
      var shopEmbed = new Discord.MessageEmbed()
        .setColor('FF8B00')
        .setAuthor('Available Shop', 'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670')
        .setDescription('- Pickaxe\n- Shovel\n- Generator\n\nUse `gshop <tools name>` to view a shop')
        .setTimestamp();
      return message.channel.send(shopEmbed);
    }
  }
};

module.exports.info = {
  names: ['shop', 'shopping'],
};
