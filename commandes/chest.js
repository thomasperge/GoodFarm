const Discord = require('discord.js');
const EconomyData = require('../modules/economy.js');
const ItemsData = require('../modules/items.js');
const ConfigEmoji = require('../config/configemoji.json');
const StatsData = require('../modules/stats.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**=== Account Economy ===*/
  let economy = await EconomyData.findOne({ userId: message.author.id });
  if (!economy) return message.reply("❌ you don't have an account: `gcreate`");
  else {
    /**=== Account Items ===*/
    let items = await ItemsData.findOne({ userId: message.author.id });
    if (!items) return message.reply("❌ you don't have an account: `gcreate`");
    else {
      /**Verification Chest */
      if (economy.eco.chest <= 0) {
        return message.reply(" » you don't have any chests!");
      } else {
        /**=== Account Stats ===*/
        let statistics = await StatsData.findOne({ userId: message.author.id });
        if (!statistics) return message.reply("❌ you don't have an account: `gcreate`");
        else {
          /**Random Business Value */
          var randomBusinessValue = Math.floor(Math.random() * 130) + 21;
          economy.eco.businessvalue = economy.eco.businessvalue += randomBusinessValue;

          statistics.stats.nbchest = statistics.stats.nbchest += 1;
          statistics.save();

          //**Function Random Item */
          function randomChestFunction(max, min, nameChest, percentage, emojiChest) {
            var randomItem = Math.floor(Math.random() * 2) + 1;
            if (randomItem === 1) {
              let randomRessource = Math.floor(Math.random() * max) + min;
              let emojiItem = ConfigEmoji.itemMineEmoji.rainbow;
              items.mine.rainbow = items.mine.rainbow += randomRessource;
              economy.eco.chest = economy.eco.chest -= 1;
              items.save();
              economy.save();
              return message.reply(`You opened a ${nameChest}${emojiChest} and got ${randomRessource}${emojiItem} (${percentage})`);
            }
            if (randomItem === 2) {
              let randomRessource = Math.floor((Math.random() * max + min) * 1.8);
              let emojiItem = ConfigEmoji.itemFarmEmoji.clover;
              items.farm.clover = items.farm.clover += randomRessource;
              economy.eco.chest = economy.eco.chest -= 1;
              items.save();
              economy.save();
              return message.reply(`You opened a ${nameChest}${emojiChest} and got ${randomRessource}${emojiItem} (${percentage})`);
            }
          }

          function chooseChest() {
            //**Random Chest */
            var randomChest = Math.random();
            if (randomChest < 0.398) {
              return randomChestFunction(15, 4, 'Dirt Chest', '40%', `${ConfigEmoji.chest.dirtChest}`);
            }
            if (randomChest < 0.618) {
              return randomChestFunction(25, 10, 'Plastic Chest', '22%', `${ConfigEmoji.chest.plasticChest}`);
            }
            if (randomChest < 0.768) {
              return randomChestFunction(35, 14, 'Metal Chest', '15%', `${ConfigEmoji.chest.metalChest}`);
            }
            if (randomChest < 0.888) {
              return randomChestFunction(45, 18, 'Gold Chest', '12%', `${ConfigEmoji.chest.goldChest}`);
            }
            if (randomChest < 0.958) {
              return randomChestFunction(60, 22, 'Jelly Chest', '7%', `${ConfigEmoji.chest.jellyChest}`);
            }
            if (randomChest < 0.1) {
              return randomChestFunction(75, 30, 'Magic Chest', '4%', `${ConfigEmoji.chest.magicChest}`);
            }
          }

          chooseChest();
          const logChannel = client.channels.cache.get('584036562241585167');
          var now = new Date();
          var date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
          var messageEmbed = new Discord.MessageEmbed()
            .setColor('#ECCC09')
            .setAuthor(`Log ${date}`)
            .setDescription(`[CHEST OPEN] command by: ${client.users.cache.get(user.id).username}`);
          logChannel.send(messageEmbed);
        }
      }
    }
  } /**ECO FIN */
};

module.exports.info = {
  names: ['chest', 'box', 'openchest'],
};
