const Discord = require('discord.js')
const ToolsData = require('../modules/tools.js')
const ConfigEmoji = require('../config/configemoji.json')
const EconomyData = require('../modules/economy.js')
/**Config Cooldown */
var shuffleTime = 1.44e7
var cooldownPlayers = new Discord.Collection()

module.exports.run = async (client, message, args) => {
    var user = message.author

    /**=== Cooldown Commands: Generator: 4h */
    if (
        cooldownPlayers.get(message.author.id) &&
        new Date().getTime() - cooldownPlayers.get(message.author.id) <
            shuffleTime
    ) {
        var measuredTime = new Date(null)
        measuredTime.setSeconds(
            Math.ceil(
                (shuffleTime -
                    (new Date().getTime() -
                        cooldownPlayers.get(message.author.id))) /
                    1000
            )
        ) // specify value of SECONDS
        var MHSTime = measuredTime.toISOString().substr(11, 8)
        message.channel.send(
            '⌚ Please wait `' + MHSTime + ' hours` and try again.'
        )
        return
    }
    cooldownPlayers.set(message.author.id, new Date().getTime())

    /**=== Account Tools ===*/
    let tools = await ToolsData.findOne({ userId: message.author.id })
    if (!tools) return message.reply("❌ you don't have an account: `gcreate`")
    else {
        /**Account Economy */
        let economy = await EconomyData.findOne({ userId: message.author.id })
        if (!economy)
            return message.reply("❌ you don't have an account: `gcreate`")
        else {
            /**===== Command Generator =====*/
            if (tools.tool.generator === 0)
                return message.reply("❌ you haven't bought a generator yet!")

            function generatorFunction(lvlGen) {
                var randomGem = Math.floor(
                    Math.random() * (lvlGen * 87 - lvlGen * 9)
                )
                var generatorEmbed = new Discord.MessageEmbed()
                    .setColor('820EE7')
                    .setAuthor(
                        `${
                            client.users.cache.get(user.id).username
                        }'s Generator`,
                        'https://media.discordapp.net/attachments/693829568720535664/697087222146400336/logo_GoodFarm.png?width=670&height=670'
                    )
                    .setDescription(
                        `${ConfigEmoji.economyEmoji.generatorEmoji} Generator Level: **${lvlGen}**\nYour Generator produced: +${randomGem}${ConfigEmoji.economyEmoji.gem}\n⌛ Next production: ` +
                            '`4h`'
                    )
                    .setThumbnail(
                        'https://cdn.discordapp.com/attachments/825451371901485117/844253124779835402/generator.png'
                    )
                    .setTimestamp()
                economy.eco.gem = economy.eco.gem += randomGem
                economy.save()
                return message.reply(generatorEmbed)
            }

            function main() {
                var randomItem =
                    Math.floor(Math.random() * 12) + 1 /**Between 1 and 12 */
                if (randomItem === 2) {
                    /**Generator Break */
                    shuffleTime = 2.88e7
                    return message.reply(
                        `Oh no, your generator ${ConfigEmoji.economyEmoji.generatorEmoji} is broken during production ... come back in` +
                            ' `8 hours` ' +
                            '!'
                    )
                } else {
                    /**Random Business Value */
                    var randomBusinessValue =
                        Math.floor(Math.random() * 1000) + 110
                    economy.eco.businessvalue = economy.eco.businessvalue += randomBusinessValue

                    /**Generator not Break */
                    generatorFunction(tools.tool.generator)
                    return (shuffleTime = 1.44e7)
                }
            }
            main()
        }
    }
}

module.exports.info = {
    names: ['generator', 'gen', 'en', 'enerator'],
}
