const Discord = require('discord.js');
const ToolsData = require('../modules/tools.js');
const EconomyData = require('../modules/economy.js');
const ConfigTool = require('../config/configtools.json');
const ConfigEmoji = require('../config/configemoji.json');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;

  /**Account Tools */
  let tools = await ToolsData.findOne({ userId: message.author.id });
  if (!tools) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**Economy Tools */
    let economy = await EconomyData.findOne({ userId: message.author.id });
    if (!economy) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      var inputTool = args[0];
      /**Function Str() Number */
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

      /**== Know the item: Pickaxe / Shovel ==*/
      if ((inputTool === 'pickaxe') | ((inputTool === 'Pickaxe') | (inputTool === 'p') | (inputTool === 'P'))) {
        /**=== Objet: Pickaxe ===*/
        var itemTool = 'pickaxe';
        if (tools.tool.pickaxe === 1) {
          var nextName = 'Stone Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl2_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.stonePickaxe}`;
          var money = 'coins';
        }
        if (tools.tool.pickaxe === 2) {
          var nextName = 'Iron Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl3_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.ironPickaxe}`;
          var money = 'coins';
        }
        if (tools.tool.pickaxe === 3) {
          var nextName = 'Diamond Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl4_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.diamondPickaxe}`;
          var money = 'coins';
        }
        if (tools.tool.pickaxe === 4) {
          var nextName = 'Zodiac Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl5_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.zodiacPickaxe}`;
          var money = 'coins';
        }
        if (tools.tool.pickaxe === 5) {
          var nextName = 'Ethernal Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl6_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.ethernalPickaxe}`;
          var money = 'coins';
        }
        if (tools.tool.pickaxe === 6) {
          var nextName = 'Fire Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl7_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.firePickaxe}`;
          var money = 'coins';
        }
        if (tools.tool.pickaxe === 7) {
          var nextName = 'Magical Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl8_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.magicalPickaxe}`;
          var money = 'gem';
        }
        if (tools.tool.pickaxe === 8) {
          var nextName = 'Enchant Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl9_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.enchantPickaxe}`;
          var money = 'gem';
        }
        if (tools.tool.pickaxe === 9) {
          var nextName = 'Rainbow Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl10_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.rainbowPickaxe}`;
          var money = 'gem';
        }
        if (tools.tool.pickaxe === 10) {
          var nextName = 'Rainbow FullArt Pickaxe';
          var nextPrice = `${ConfigTool.Price.toolslvl11_Price}`;
          var nextEmoji = `${ConfigEmoji.pickaxeEmoji.rainbowFAPickaxe}`;
          var money = 'gem';
        }
        if (tools.tool.pickaxe === 11) return message.reply('your pickaxe is at max level... ! 🎊');
      } else if ((inputTool === 'shovel') | (inputTool === 'Shovel') | (inputTool === 's') | (inputTool === 'S')) {
        /**=== Objet Shovel ===*/
        var itemTool = 'shovel';
        if (tools.tool.shovel === 1) {
          var nextName = 'Stone Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl2_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.stoneShovel}`;
          var money = 'coins';
        }
        if (tools.tool.shovel === 2) {
          var nextName = 'Iron Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl3_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.ironShovel}`;
          var money = 'coins';
        }
        if (tools.tool.shovel === 3) {
          var nextName = 'Diamond Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl4_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.diamondShovel}`;
          var money = 'coins';
        }
        if (tools.tool.shovel === 4) {
          var nextName = 'Zodiac Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl5_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.zodiacShovel}`;
          var money = 'coins';
        }
        if (tools.tool.shovel === 5) {
          var nextName = 'Ethernal Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl6_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.ethernalShovel}`;
          var money = 'coins';
        }
        if (tools.tool.shovel === 6) {
          var nextName = 'Fire Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl7_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.fireShovel}`;
          var money = 'coins';
        }
        if (tools.tool.shovel === 7) {
          var nextName = 'Galaxy Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl8_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.galaxyShovel}`;
          var money = 'gem';
        }
        if (tools.tool.shovel === 8) {
          var nextName = 'Enchant Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl9_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.enchantShovel}`;
          var money = 'gem';
        }
        if (tools.tool.shovel === 9) {
          var nextName = 'Rainbow Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl10_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.rainbowShovel}`;
          var money = 'gem';
        }
        if (tools.tool.shovel === 10) {
          var nextName = 'Rainbow FullArt Shovel';
          var nextPrice = `${ConfigTool.Price.toolslvl11_Price}`;
          var nextEmoji = `${ConfigEmoji.shovelEmoji.rainbowFAShovel}`;
          var money = 'gem';
        }
        if (tools.tool.shovel === 11) return message.reply('your shovel is at max level... ! 🎊');
      } else if ((inputTool === 'generator') | (inputTool === 'gen') | (inputTool === 'g') | (inputTool === 'G')) {
        /** Generator*/
        var itemTool = 'generator';
        if (tools.tool.generator === 0) {
          var nextName = 'Generator level 1';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_1Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 1) {
          var nextName = 'Generator level 2';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_2Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 2) {
          var nextName = 'Generator level 3';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_3Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 3) {
          var nextName = 'Generator level 4';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_4Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 4) {
          var nextName = 'Generator level 5';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_5Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 5) {
          var nextName = 'Generator level 6';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_6Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 6) {
          var nextName = 'Generator level 7';
          var nextPrice = `${ConfigTool.PriceGenerator.generatorlvl_7Price}`;
          var nextEmoji = `${ConfigEmoji.economyEmoji.generatorEmoji}`;
          var money = 'gem';
        }
        if (tools.tool.generator === 7) return message.reply('your generator is at max level... ! 🎊');
      } else {
        message.reply('Proper usage is `gbuy <pickaxe / shovel / generator>`');
      }

      /**== Successful Function ==*/
      function successful(itemTool, nextName, nextEmoji, nextPriceStr, money) {
        if (money === 'coins') {
          var emojiFunction = `${ConfigEmoji.economyEmoji.coins}`;
        }
        if (money === 'gem') {
          var emojiFunction = `${ConfigEmoji.economyEmoji.gem}`;
        }
        var successfulEmbed = new Discord.MessageEmbed()
          .setColor('65FF00')
          .setAuthor(`${message.author.username} New ${itemTool}`, `https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670`)
          .setDescription(`✅ **Success !**\nYou have bought ${nextEmoji} ${nextName} for ${nextPriceStr}${emojiFunction}`)
          .setFooter('GoodFarm 2021 |')
          .setTimestamp();
        message.reply(successfulEmbed);

        const logChannel = client.channels.cache.get('584036562241585167');
        var now = new Date();
        var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        var messageEmbed = new Discord.MessageEmbed()
          .setColor('#ECCC09')
          .setAuthor(`Log ${date}`)
          .setDescription(`[UPGRADE] command by: ${client.users.cache.get(user.id).username}\nUpgrade: ${nextEmoji} ${nextName} for ${nextPriceStr}${emojiFunction}`);
        return logChannel.send(messageEmbed);
      } /**End Successful */

      /**Random Business Value */
      economy.eco.businessvalue = economy.eco.businessvalue += Math.floor(nextPrice / 1.32);

      /**=== Pickaxe ===*/
      if (itemTool === 'pickaxe') {
        if (money === 'coins') {
          if (economy.eco.money < nextPrice) {
            return message.reply(`Oh no, you don't have enough money to buy the ${nextEmoji} **${nextName}**, you're missing: ${numStr(nextPrice - economy.eco.money)}${ConfigEmoji.economyEmoji.coins}`);
          }
          if (economy.eco.money >= nextPrice) {
            var nextPriceStr = numStr(nextPrice);
            economy.eco.money = economy.eco.money -= nextPrice;
            tools.tool.pickaxe = tools.tool.pickaxe += 1;
            economy.save();
            tools.save();
            successful(itemTool, nextName, nextEmoji, nextPriceStr, money);
          }
        }
        if (money === 'gem') {
          if (economy.eco.gem < nextPrice) {
            return message.reply(`Oh no, you don't have enough gem to buy the ${nextEmoji} **${nextName}**, you're missing: ${numStr(nextPrice - economy.eco.gem)}${ConfigEmoji.economyEmoji.gem}`);
          }
          if (economy.eco.gem >= nextPrice) {
            var nextPriceStr = numStr(nextPrice);
            economy.eco.gem = economy.eco.gem -= nextPrice;
            tools.tool.pickaxe = tools.tool.pickaxe += 1;
            economy.save();
            tools.save();
            successful(itemTool, nextName, nextEmoji, nextPriceStr, money);
          }
        }
      }
      /**=== Shovel ===*/
      if (itemTool === 'shovel') {
        if (money === 'coins') {
          if (economy.eco.money < nextPrice) {
            return message.reply(`Oh no, you don't have enough money to buy the ${nextEmoji} **${nextName}**, you're missing: ${numStr(nextPrice - economy.eco.money)}${ConfigEmoji.economyEmoji.coins}`);
          }
          if (economy.eco.money >= nextPrice) {
            var nextPriceStr = numStr(nextPrice);
            economy.eco.money = economy.eco.money -= nextPrice;
            tools.tool.shovel = tools.tool.shovel += 1;
            economy.save();
            tools.save();
            successful(itemTool, nextName, nextEmoji, nextPriceStr, money);
          }
        }
        if (money === 'gem') {
          if (economy.eco.gem < nextPrice) {
            return message.reply(`Oh no, you don't have enough gem to buy the ${nextEmoji} **${nextName}**, you're missing: ${numStr(nextPrice - economy.eco.gem)}${ConfigEmoji.economyEmoji.gem}`);
          }
          if (economy.eco.gem >= nextPrice) {
            var nextPriceStr = numStr(nextPrice);
            economy.eco.gem = economy.eco.gem -= nextPrice;
            tools.tool.shovel = tools.tool.shovel += 1;
            economy.save();
            tools.save();
            successful(itemTool, nextName, nextEmoji, nextPriceStr, money);
          }
        }
      }
      /**=== Generator ===*/
      if (itemTool === 'generator') {
        if (money === 'gem') {
          if (economy.eco.gem < nextPrice) {
            return message.reply(`Oh no, you don't have enough gem to buy the ${nextEmoji} **${nextName}**, you're missing: ${numStr(nextPrice - economy.eco.gem)}${ConfigEmoji.economyEmoji.gem}`);
          }
          if (economy.eco.gem >= nextPrice) {
            var nextPriceStr = numStr(nextPrice);
            economy.eco.gem = economy.eco.gem -= nextPrice;
            tools.tool.generator = tools.tool.generator += 1;
            economy.save();
            tools.save();
            successful(itemTool, nextName, nextEmoji, nextPriceStr, money);
          }
        }
      }
    }
  }
};

module.exports.info = {
  names: ['upgrade', 'improve', 'buy'],
};
