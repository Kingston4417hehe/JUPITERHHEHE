const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'stop',
    aliases: ["s"],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const stopError = new MessageEmbed()
              .setDescription("Nem vagy bent egy voice channelben sem")
              .setColor("RANDOM")
            return message.channel.send(stopError)
        }
        if(!client.distube.isPlaying(message)) {
            const stopError2 = new MessageEmbed()
            .setDescription("Nem megy egy zeneszám se")
            .setColor("RANDOM")
            return message.channel.send(stopError2)
        }
        client.distube.stop(message);
        const embed = new MessageEmbed()
        .setDescription('A zene megállt')
        .setColor("RANDOM")
        message.channel.send(embed)

    }
}
