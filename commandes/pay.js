const Discord = require('discord.js');
const ItemsData = require('../modules/items.js');
const EconomyData = require('../modules/economy.js');
const ConfigEmoji = require('../config/configemoji.json');

module.exports.run = async (client, message, args) => {
  /**== User ==*/
  var user = message.author;
  var userInput = message.mentions.users.first();
  var itemInput = args[1];
  var amoutInput = Math.floor(args[2]);

  if (userInput === ' ') {
    return message.reply('❌ player Error: `ggive <@player> <item> <amout>`');
  }
  if (itemInput === ' ') {
    return message.reply('❌ item Error: `ggive <@player> <item> <amout>`');
  }
  if (isNaN(amoutInput)) {
    return message.reply('❌ amout Error: `ggive <@player> <item> <amout>`');
  }
  if (user === userInput) {
    return message.reply("❌ it's not good to want to cheat...");
  }
  /**========= User ========= */
  /**=== Account Economy User ===*/
  let economyUser = await EconomyData.findOne({ userId: message.author.id });
  if (!economyUser) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**=== Account Items User ===*/
    let itemsUser = await ItemsData.findOne({ userId: message.author.id });
    if (!itemsUser) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**========= UserInput ========= */
      /**=== Account Economy UserInput ===*/
      let economyUserInput = await EconomyData.findOne({ userId: userInput.id });
      if (!economyUserInput) return message.reply('❌ ' + `${userInput}` + " don't have an account: `gcreate`");
      else {
        /**=== Account Items UserInput ===*/
        let itemsUserInput = await ItemsData.findOne({ userId: userInput.id });
        if (!itemsUserInput) return message.reply('❌ ' + `${userInput}` + " don't have an account: `gcreate`");
        else {
          /**=== Function ===*/
          function giveItem(emoji, nameItem, dataItem) {
            /**Function */
            if (dataItem < amoutInput) return message.reply(`❌ you don't have enough ressource, come back as soon as you mine/farm more`);
            else {
              economyUser.save();
              economyUserInput.save();
              itemsUser.save();
              itemsUserInput.save();
              return message.channel.send(`**=====> Trade <=====**\n<${user}> **gives** <${userInput}> : **${amoutInput}${emoji}**\n${user}: - **${amoutInput}**${emoji}\n${userInput}: + **${amoutInput}***${emoji}`);
            }
          }
          var itemList = ['coins', 'gem', 'chest', 'bush', 'wheat', 'corn', 'potato', 'carrot', 'clover', 'stone', 'coal', 'iron', 'gold', 'diamond', 'rainbow', 'money'];
          function itemFunction() {
            /**=== ECONOMY ===*/
            /**Coins */
            if (itemInput === itemList[0] || itemInput === itemList[15]) {
              var emoji = `${ConfigEmoji.economyEmoji.coins}`;
              var dataItem = economyUser.eco.money;
              economyUserInput.eco.money = economyUserInput.eco.money += amoutInput;
              economyUser.eco.money = economyUser.eco.money -= amoutInput;
              giveItem(emoji, 'Coins', dataItem);
              /**Gem */
            } else if (itemInput === itemList[1]) {
              var emoji = `${ConfigEmoji.economyEmoji.gem}`;
              var dataItem = economyUser.eco.gem;
              economyUserInput.eco.gem = economyUserInput.eco.gem += amoutInput;
              economyUser.eco.gem = economyUser.eco.gem -= amoutInput;
              giveItem(emoji, 'Gem', dataItem);
              /**Chest */
            } else if (itemInput === itemList[2]) {
              var emoji = `${ConfigEmoji.chest.magicChest}`;
              var dataItem = economyUser.eco.chest;
              economyUserInput.eco.chest = economyUserInput.eco.chest += amoutInput;
              economyUser.eco.chest = economyUser.eco.chest -= amoutInput;
              giveItem(emoji, 'Chest', dataItem);
              /**=== FARM ===*/
              /**Bush */
            } else if (itemInput === itemList[3]) {
              var emoji = `${ConfigEmoji.itemFarmEmoji.bush}`;
              var dataItem = itemsUser.farm.bush;
              itemsUserInput.farm.bush = itemsUserInput.farm.bush += amoutInput;
              itemsUser.farm.bush = itemsUser.farm.bush -= amoutInput;
              giveItem(emoji, 'Bush', dataItem);
              /**Wheat */
            } else if (itemInput === itemList[4]) {
              var emoji = `${ConfigEmoji.itemFarmEmoji.wheat}`;
              var dataItem = itemsUser.farm.wheat;
              itemsUserInput.farm.wheat = itemsUserInput.farm.wheat += amoutInput;
              itemsUser.farm.wheat = itemsUser.farm.wheat -= amoutInput;
              giveItem(emoji, 'Wheat', dataItem);
              /**Corn */
            } else if (itemInput === itemList[5]) {
              var emoji = `${ConfigEmoji.itemFarmEmoji.corn}`;
              var dataItem = itemsUser.farm.corn;
              itemsUserInput.farm.corn = itemsUserInput.farm.corn += amoutInput;
              itemsUser.farm.corn = itemsUser.farm.corn -= amoutInput;
              giveItem(emoji, 'Corn', dataItem);
              /**Potato */
            } else if (itemInput === itemList[6]) {
              var emoji = `${ConfigEmoji.itemFarmEmoji.potato}`;
              var dataItem = itemsUser.farm.potato;
              itemsUserInput.farm.potato = itemsUserInput.farm.potato += amoutInput;
              itemsUser.farm.potato = itemsUser.farm.potato -= amoutInput;
              giveItem(emoji, 'Potato', dataItem);
              /**Carrot */
            } else if (itemInput === itemList[7]) {
              var emoji = `${ConfigEmoji.itemFarmEmoji.carrot}`;
              var dataItem = itemsUser.farm.carrot;
              itemsUserInput.farm.carrot = itemsUserInput.farm.carrot += amoutInput;
              itemsUser.farm.carrot = itemsUser.farm.carrot -= amoutInput;
              giveItem(emoji, 'Carrot', dataItem);
              /**Clover */
            } else if (itemInput === itemList[8]) {
              var emoji = `${ConfigEmoji.itemFarmEmoji.clover}`;
              var dataItem = itemsUser.farm.clover;
              itemsUserInput.farm.clover = itemsUserInput.farm.clover += amoutInput;
              itemsUser.farm.clover = itemsUser.farm.clover -= amoutInput;
              giveItem(emoji, 'Clover', dataItem);
              /**=== MINE ===*/
              /**Stone */
            } else if (itemInput === itemList[9]) {
              var emoji = `${ConfigEmoji.itemMineEmoji.stone}`;
              var dataItem = itemsUser.mine.stone;
              itemsUserInput.mine.stone = itemsUserInput.mine.stone += amoutInput;
              itemsUser.mine.stone = itemsUser.mine.stone -= amoutInput;
              giveItem(emoji, 'Stone', dataItem);
              /**Coal */
            } else if (itemInput === itemList[10]) {
              var emoji = `${ConfigEmoji.itemMineEmoji.coal}`;
              var dataItem = itemsUser.mine.coal;
              itemsUserInput.mine.coal = itemsUserInput.mine.coal += amoutInput;
              itemsUser.mine.coal = itemsUser.mine.coal -= amoutInput;
              giveItem(emoji, 'Coal', dataItem);
              /**Iron */
            } else if (itemInput === itemList[11]) {
              var emoji = `${ConfigEmoji.itemMineEmoji.iron}`;
              var dataItem = itemsUser.mine.iron;
              itemsUserInput.mine.iron = itemsUserInput.mine.iron += amoutInput;
              itemsUser.mine.iron = itemsUser.mine.iron -= amoutInput;
              giveItem(emoji, 'Iron', dataItem);
              /**Gold */
            } else if (itemInput === itemList[12]) {
              var emoji = `${ConfigEmoji.itemMineEmoji.gold}`;
              var dataItem = itemsUser.mine.gold;
              itemsUserInput.mine.gold = itemsUserInput.mine.gold += amoutInput;
              itemsUser.mine.gold = itemsUser.mine.gold -= amoutInput;
              giveItem(emoji, 'Gold', dataItem);
              /**Diamond */
            } else if (itemInput === itemList[13]) {
              var emoji = `${ConfigEmoji.itemMineEmoji.diamond}`;
              var dataItem = itemsUser.mine.diamond;
              itemsUserInput.mine.diamond = itemsUserInput.mine.diamond += amoutInput;
              itemsUser.mine.diamond = itemsUser.mine.diamond -= amoutInput;
              giveItem(emoji, 'Diamond', dataItem);
              /**Rainbow */
            } else if (itemInput === itemList[14]) {
              var emoji = `${ConfigEmoji.itemMineEmoji.rainbow}`;
              var dataItem = itemsUser.mine.rainbow;
              itemsUserInput.mine.rainbow = itemsUserInput.mine.rainbow += amoutInput;
              itemsUser.mine.rainbow = itemsUser.mine.rainbow -= amoutInput;
              giveItem(emoji, 'Rainbow', dataItem);
            } else {
              return message.reply('❌ item Error: `ggive <@player> <item> <amout>`');
            }
          }
          itemFunction();
        }
      }
    }
  }
};

module.exports.info = {
  names: ['pay', 'trade'],
};
