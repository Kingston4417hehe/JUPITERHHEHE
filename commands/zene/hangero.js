const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'hangerő',
    description: "Changes Volume",
    aliases: ['vol'],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const volumeError = new MessageEmbed()
              .setDescription("Nem vagy bent egy voice csatornában sem")
              .setColor("RANDOM")
            return message.channel.send(volumeError)
        }
        if(!client.distube.isPlaying(message)) {
            const volumeError2 = new MessageEmbed()
            .setDescription("Please play a song")
            .setColor("RANDOM")
            return message.channel.send(volumeError2)
        }
        let volume = parseInt(args[0])
        if(isNaN(args[0])) {
            const volumeError3 = new MessageEmbed()
            .setDescription('Kérlek egy valós számot adj meg 1 - 100')
            .setColor("RANDOM")
            return message.channel.send(volumeError3)
        }
        if(args[0] > 100) {
            const volumeError4 = new MessageEmbed()
            .setDescription('Kérlek egy valós számot adj meg 1 - 100')
            .setColor("RANDOM")
            return message.channel.send(volumeError4)
        }

        client.distube.setVolume(message, volume)
        const embed = new MessageEmbed()
        .setDescription(`Hangerő beállítva \`${volume}%\``)
        .setColor("RANDOM")
        message.channel.send(embed)

    }
}