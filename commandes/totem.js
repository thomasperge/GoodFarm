const Discord = require('discord.js');
const EconomyData = require('../modules/economy.js');
const ItemsData = require('../modules/items.js');
const ConfigEmoji = require('../config/configemoji.json');
const StatsData = require('../modules/stats.js');
const config = require('../config.json');
/**Config Cooldown */
const shuffleTime = 8.64e7;
var cooldownPlayers = new Discord.Collection();

module.exports.run = async (client, message, args) => {
  var user = message.author;
  /**=== Cooldown Commands: Daily: 24h */
  if (cooldownPlayers.get(message.author.id) && new Date().getTime() - cooldownPlayers.get(message.author.id) < shuffleTime) {
    var measuredTime = new Date(null);
    measuredTime.setSeconds(Math.ceil((shuffleTime - (new Date().getTime() - cooldownPlayers.get(message.author.id))) / 1000)); // specify value of SECONDS
    var MHSTime = measuredTime.toISOString().substr(11, 8);
    message.channel.send('⌚ Please wait `' + MHSTime + ' hours` and try again.');
    return;
  }
  
  cooldownPlayers.set(message.author.id, new Date().getTime());

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
        // TOTEM CODE HERE
        // Tout les X secondes on recoit de la stone pour le totem lvl1
        // Totem 2 = Fer
        // Totem 3 = Diamond
        // Totem 4 = rainbow (a voir)
      }
    }
  }
};

module.exports.info = {
  names: ['totem', 'tot'],
};
