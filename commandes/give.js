const Discord = require('discord.js');
const EconomyData = require('../modules/economy.js');
const ItemsData = require('../modules/items.js');
const ConfigEmoji = require('../config/configemoji.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;

  /**====== VERIFICATION ====== */
  if (message.author.id === '369531783471038474') {
    var playerInput = message.mentions.users.first();
    var itemInput = args[1];
    var amoutInput = Math.floor(args[2]);
    if (playerInput === ' ') {
      return message.reply('❌ player Error: `ggive <@player> <item> <amout>`');
    }
    if (itemInput === ' ') {
      return message.reply('❌ item Error: `ggive <@player> <item> <amout>`');
    }
    if (isNaN(amoutInput)) {
      return message.reply('❌ amout Error: `ggive <@player> <item> <amout>`');
    }

    /**==== MEMBER Account ECONOMY ====*/
    let economyMember = await EconomyData.findOne({ userId: playerInput.id });
    if (!economyMember) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**==== MEMBER Account ITEM ====*/
      let itemsMember = await ItemsData.findOne({ userId: playerInput.id });
      if (!itemsMember) return message.reply("❌ you don't have an account: `gcreate`");
      else {
        /**Function */
        function giveItem(dataItemMember, emoji) {
          message.channel.send(`✅ Donation of: ${amoutInput}${emoji} to ${playerInput}`);
          return (dataItemMember = dataItemMember += amoutInput);
        }
        var itemList = ['coins', 'gem', 'chest', 'bush', 'wheat', 'corn', 'potato', 'carrot', 'clover', 'stone', 'coal', 'iron', 'gold', 'diamond', 'rainbow', 'money'];
        function main() {
          /**=== ECONOMY ===*/
          if (itemInput === itemList[0] || itemInput === itemList[15]) {
            var emoji = `${ConfigEmoji.economyEmoji.coins}`;
            var dataItemMember = economyMember.eco.money;
            economyMember.eco.money = giveItem(dataItemMember, emoji);
            economyMember.save();
          } else if (itemInput === itemList[1]) {
            var emoji = `${ConfigEmoji.economyEmoji.gem}`;
            var dataItemMember = economyMember.eco.gem;
            economyMember.eco.gem = giveItem(dataItemMember, emoji);
            economyMember.save();
          } else if (itemInput === itemList[2]) {
            var emoji = `${ConfigEmoji.chest.magicChest}`;
            var dataItemMember = economyMember.eco.chest;
            economyMember.eco.chest = giveItem(dataItemMember, emoji);
            economyMember.save();
          } else if (itemInput === itemList[3]) {
            /**=== FARM ===*/
            var emoji = `${ConfigEmoji.itemFarmEmoji.bush}`;
            var dataItemMember = itemsMember.farm.bush;
            itemsMember.farm.bush = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[4]) {
            var emoji = `${ConfigEmoji.itemFarmEmoji.wheat}`;
            var dataItemMember = itemsMember.farm.wheat;
            itemsMember.farm.wheat = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[5]) {
            var emoji = `${ConfigEmoji.itemFarmEmoji.corn}`;
            var dataItemMember = itemsMember.farm.corn;
            itemsMember.farm.corn = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[6]) {
            var emoji = `${ConfigEmoji.itemFarmEmoji.potato}`;
            var dataItemMember = itemsMember.farm.potato;
            itemsMember.farm.potato = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[7]) {
            var emoji = `${ConfigEmoji.itemFarmEmoji.carrot}`;
            var dataItemMember = itemsMember.farm.carrot;
            itemsMember.farm.carrot = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[8]) {
            var emoji = `${ConfigEmoji.itemFarmEmoji.clover}`;
            var dataItemMember = itemsMember.farm.clover;
            itemsMember.farm.clover = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[9]) {
            /**=== MINE ===*/
            var emoji = `${ConfigEmoji.itemMineEmoji.stone}`;
            var dataItemMember = itemsMember.mine.stone;
            itemsMember.mine.stone = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[10]) {
            var emoji = `${ConfigEmoji.itemMineEmoji.coal}`;
            var dataItemMember = itemsMember.mine.coal;
            itemsMember.mine.coal = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[11]) {
            var emoji = `${ConfigEmoji.itemMineEmoji.iron}`;
            var dataItemMember = itemsMember.mine.iron;
            itemsMember.mine.iron = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[12]) {
            var emoji = `${ConfigEmoji.itemMineEmoji.gold}`;
            var dataItemMember = itemsMember.mine.gold;
            itemsMember.mine.gold = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[13]) {
            var emoji = `${ConfigEmoji.itemMineEmoji.diamond}`;
            var dataItemMember = itemsMember.mine.diamond;
            itemsMember.mine.diamond = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else if (itemInput === itemList[14]) {
            var emoji = `${ConfigEmoji.itemMineEmoji.rainbow}`;
            var dataItemMember = itemsMember.mine.rainbow;
            itemsMember.mine.rainbow = giveItem(dataItemMember, emoji);
            itemsMember.save();
          } else {
            return message.reply('❌ item Error: `ggive <@player> <item> <amout>`');
          }
        }
        main();
      }
    }
  } else {
    return message.reply("❌ you don't have the rights to use this command");
  }
};

module.exports.info = {
  names: ['give'],
};
