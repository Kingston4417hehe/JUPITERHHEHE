const { MessageEmbed, MessageManager } = require("discord.js")

module.exports = {
    name: 'pause',
    aliases: ["megállítás"],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const pauseError = new MessageEmbed()
              .setDescription("Kérlek lépj be egy voice channelbe")
              .setColor("RANDOM")
            return message.channel.send(pauseError)
        }
        if(!client.distube.isPlaying(message)) {
            const pauseError2 = new MessageEmbed()
            .setDescription("Nincs mit lejátszani")
            .setColor("RANDOM")
            return message.channel.send(pauseError2)
        }
        if(client.distube.isPaused(message)) {
            const pauseError3 = new MessageEmbed()
            .setDescription('A szám már meg volt állítva')
            .setColor("RANDOM")
            return message.channel.send(pauseError3)
        }

        client.distube.pause(message)
        const embed = new MessageEmbed()
        .setDescription('A szám megállt')
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}