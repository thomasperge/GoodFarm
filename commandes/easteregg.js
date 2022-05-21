const Discord = require('discord.js')
const ItemsData = require('../modules/items.js')
const ConfigEmoji = require('../config/configemoji.json')

/**Config Cooldown */
const shuffleTime = 8.64e7
var cooldownPlayers = new Discord.Collection()

module.exports.run = async (client, message, args) => {
    var user = message.author

    cooldownPlayers.set(message.author.id, new Date().getTime())

    /**=== Account Items ===*/
    let items = await ItemsData.findOne({ userId: message.author.id })
    if (!items) return message.reply("❌ you don't have an account: `gcreate`")
    else {
        // Easter Egg command
        var nbStone = 50

        function main() {
            items.mine.stone = items.mine.stone + nbStone
        }

        main()
        items.save()
        message.reply(
            `Yaohh!, You found Easter Egg, +50 ${ConfigEmoji.itemMineEmoji.stone}`
        )
    }
}

module.exports.info = {
    names: ['easteregg', 'easter egg', 'eg'],
}
