const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const EconomyData = require('../modules/economy.js');
const ConfigPrices = require('../config/configressource.json');
const ConfigEmoji = require('../config/configemoji.json');
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
      /**== Data recovery ==*/
      var itemInput = args[0];
      var amoutInput = Math.floor(args[1]);
      var itemMineList = ['Stone', 'stone', 'Coal', 'coal', 'Iron', 'iron', 'Gold', 'gold', 'Diamond', 'diamond', 'Rainbow', 'rainbow'];
      var itemFarmList = ['Bush', 'bush', 'Wheat', 'wheat', 'Corn', 'corn', 'Potato', 'potato', 'Carrot', 'carrot', 'Clover', 'clover'];

      /**=======Verification if item > list =======*/
      if (amoutInput <= 0) {
        return message.reply('❌ the amount is not valid, please try again, `gsell <item> <amout>`');
      }
      if (isNaN(amoutInput)) {
        return message.reply('❌ the amount is not valid, please try again, `gsell <item> <amout>`');
      } else {
        /**===========================*/
        /**====== MINE FUNCTION ======*/
        /**===========================*/
        function mineItemFunction() {
          /**= Stone =*/
          if (itemMineList.slice(0, 2).includes(itemInput)) {
            if (amoutInput > items.mine.stone) {
              var rigthSale = false;
            }
            if (amoutInput <= items.mine.stone) {
              var rigthSale = true;
              items.mine.stone = items.mine.stone -= amoutInput;
              var totalePriceMine = Math.floor(ConfigPrices.priceItems.stone * amoutInput);
              var emoji = `${ConfigEmoji.itemMineEmoji.stone}`;
            }
          }
          /**= Coal =*/
          if (itemMineList.slice(2, 4).includes(itemInput)) {
            if (amoutInput > items.mine.coal) {
              var rigthSale = false;
            }
            if (amoutInput <= items.mine.coal) {
              var rigthSale = true;
              items.mine.coal = items.mine.coal -= amoutInput;
              var totalePriceMine = Math.floor(ConfigPrices.priceItems.coal * amoutInput);
              var emoji = `${ConfigEmoji.itemMineEmoji.coal}`;
            }
          }
          /**= Iron =*/
          if (itemMineList.slice(4, 6).includes(itemInput)) {
            if (amoutInput > items.mine.iron) {
              var rigthSale = false;
            }
            if (amoutInput <= items.mine.iron) {
              var rigthSale = true;
              items.mine.iron = items.mine.iron -= amoutInput;
              var totalePriceMine = Math.floor(ConfigPrices.priceItems.iron * amoutInput);
              var emoji = `${ConfigEmoji.itemMineEmoji.iron}`;
            }
          }
          /**= Gold =*/
          if (itemMineList.slice(6, 8).includes(itemInput)) {
            if (amoutInput > items.mine.gold) {
              var rigthSale = false;
            }
            if (amoutInput <= items.mine.gold) {
              var rigthSale = true;
              items.mine.gold = items.mine.gold -= amoutInput;
              var totalePriceMine = Math.floor(ConfigPrices.priceItems.gold * amoutInput);
              var emoji = `${ConfigEmoji.itemMineEmoji.gold}`;
            }
          }
          /**= Diamond =*/
          if (itemMineList.slice(8, 10).includes(itemInput)) {
            if (amoutInput > items.mine.diamond) {
              var rigthSale = false;
            }
            if (amoutInput <= items.mine.diamond) {
              var rigthSale = true;
              items.mine.diamond = items.mine.diamond -= amoutInput;
              var totalePriceMine = Math.floor(ConfigPrices.priceItems.diamond * amoutInput);
              var emoji = `${ConfigEmoji.itemMineEmoji.diamond}`;
            }
          }
          /**= Rainbow =*/
          if (itemMineList.slice(10, 12).includes(itemInput)) {
            if (amoutInput > items.mine.rainbow) {
              var rigthSale = false;
            }
            if (amoutInput <= items.mine.rainbow) {
              var rigthSale = true;
              items.mine.rainbow = items.mine.rainbow -= amoutInput;
              var totalePriceMine = Math.floor(ConfigPrices.priceItems.rainbow * amoutInput);
              var emoji = `${ConfigEmoji.itemMineEmoji.rainbow}`;
            }
          }
          /** == Verification == */
          if (rigthSale === true) {
            items.save();
            /**Random Business Value */
            economy.eco.businessvalue = economy.eco.businessvalue += Math.floor((totalePriceMine * economy.eco.profit) / 3.85);

            economy.eco.money = economy.eco.money += Math.floor(totalePriceMine * economy.eco.profit);
            economy.save();
            return message.reply(`» Successfully sold ${amoutInput}${emoji} for ${Math.floor(totalePriceMine * economy.eco.profit)} ${ConfigEmoji.economyEmoji.coins} (profit: x**${economy.eco.profit}**)`);
          }
          if (rigthSale === false) {
            return message.reply(`❌ you don't have enough ore, come back as soon as you mine more`);
          }
        }

        /**===========================*/
        /**====== FARM FUNCTION ======*/
        /**===========================*/
        function farmItemFunction() {
          if (itemFarmList.slice(0, 2).includes(itemInput)) {
            if (amoutInput > items.farm.bush) {
              var rigthSale = false;
            }
            if (amoutInput <= items.farm.bush) {
              var rigthSale = true;
              items.farm.bush = items.farm.bush -= amoutInput;
              var totalePriceFarm = Math.floor(ConfigPrices.priceItems.bush * amoutInput);
              var emoji = `${ConfigEmoji.itemFarmEmoji.bush}`;
            }
          }
          /**= Wheat =*/
          if (itemFarmList.slice(2, 4).includes(itemInput)) {
            if (amoutInput > items.farm.wheat) {
              var rigthSale = false;
            }
            if (amoutInput <= items.farm.wheat) {
              var rigthSale = true;
              items.farm.wheat = items.farm.wheat -= amoutInput;
              var totalePriceFarm = Math.floor(ConfigPrices.priceItems.wheat * amoutInput);
              var emoji = `${ConfigEmoji.itemFarmEmoji.wheat}`;
            }
          }
          /**= Corn =*/
          if (itemFarmList.slice(4, 6).includes(itemInput)) {
            if (amoutInput > items.farm.corn) {
              var rigthSale = false;
            }
            if (amoutInput <= items.farm.corn) {
              var rigthSale = true;
              items.farm.corn = items.farm.corn -= amoutInput;
              var totalePriceFarm = Math.floor(ConfigPrices.priceItems.corn * amoutInput);
              var emoji = `${ConfigEmoji.itemFarmEmoji.corn}`;
            }
          }
          /**= Potato =*/
          if (itemFarmList.slice(6, 8).includes(itemInput)) {
            if (amoutInput > items.farm.potato) {
              var rigthSale = false;
            }
            if (amoutInput <= items.farm.potato) {
              var rigthSale = true;
              items.farm.potato = items.farm.potato -= amoutInput;
              var totalePriceFarm = Math.floor(ConfigPrices.priceItems.potato * amoutInput);
              var emoji = `${ConfigEmoji.itemFarmEmoji.potato}`;
            }
          }
          /**= Carrot =*/
          if (itemFarmList.slice(8, 10).includes(itemInput)) {
            if (amoutInput > items.farm.carrot) {
              var rigthSale = false;
            }
            if (amoutInput <= items.farm.carrot) {
              var rigthSale = true;
              items.farm.carrot = items.farm.carrot -= amoutInput;
              var totalePriceFarm = Math.floor(ConfigPrices.priceItems.carrot * amoutInput);
              var emoji = `${ConfigEmoji.itemFarmEmoji.carrot}`;
            }
          }
          /**= Clover =*/
          if (itemFarmList.slice(10, 12).includes(itemInput)) {
            if (amoutInput > items.farm.clover) {
              var rigthSale = false;
            }
            if (amoutInput <= items.farm.clover) {
              var rigthSale = true;
              items.farm.clover = items.farm.clover -= amoutInput;
              var totalePriceFarm = Math.floor(ConfigPrices.priceItems.clover * amoutInput);
              var emoji = `${ConfigEmoji.itemFarmEmoji.clover}`;
            }
          }

          /** == Verification == */
          if (rigthSale === true) {
            items.save();
            /**Random Business Value */
            economy.eco.businessvalue = economy.eco.businessvalue += Math.floor((totalePriceFarm * economy.eco.profit) / 3.85);
            economy.eco.money = economy.eco.money += Math.floor(totalePriceFarm * economy.eco.profit);
            economy.save();
            return message.reply(`» Successfully sold ${amoutInput}${emoji} for ${Math.floor(totalePriceFarm * economy.eco.profit)} ${ConfigEmoji.economyEmoji.coins} (profit: x**${economy.eco.profit}**)`);
          }
          if (rigthSale === false) {
            return message.reply(`❌ you don't have enough crops, come back as soon as you farm more`);
          }
        }

        /**======= Mine =======*/
        if (itemMineList.includes(itemInput)) {
          mineItemFunction();
        } else if (itemFarmList.includes(itemInput)) {
          farmItemFunction();
        } else {
          return message.reply('❌ the item is not valid, please try again, `gsell <item> <amout>`');
        }
      }
    }
  }
};

module.exports.info = {
  names: ['sell'],
};
