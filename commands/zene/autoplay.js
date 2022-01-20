const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'autoplay',
    aliases: ['autop'],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const autoplayError = new MessageEmbed()
              .setDescription("Nem vagy bent egy voice channelben sem")
              .setColor("RANDOM")
            return message.channel.send(autoplayError)
        }
        if(!client.distube.isPlaying(message)) {
            const autoplayError2 = new MessageEmbed()
            .setDescription("Nincs mit lejátszani")
            .setColor("RANDOM")
            return message.channel.send(autoplayError2)
        }

        let mode = client.distube.toggleAutoplay(message)
        const embed = new MessageEmbed()
        .setDescription(`Autoplay Mode átváltva :\`` + (mode ? "On" : "Off") + "\`")
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}