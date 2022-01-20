const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'loop',
    aliases: ['loops'],
    run: async(client, message, args) => {
        if (!message.member.voice.channel) {
            const loopError = new MessageEmbed()
              .setDescription("Kérlek lépj be egy voice channelbe")
              .setColor("RANDOM")
            return message.channel.send(loopError)
        }
        if(!client.distube.isPlaying(message)) {
            const loopError2 = new MessageEmbed()
            .setDescription("Nincs mit lejátszani")
            .setColor("RANDOM")
            return message.channel.send(loopError2)
        }

        let mode = null

        switch (args[0]) {
            case "off":
              mode = 0
              break
            case "song":
              mode = 1
              break
            case "queue":
              mode = 2
              break
          }


        mode = client.distube.setRepeatMode(message, mode) 
        mode = mode ? mode == 2 ? "Sor ismétlése" : "Szám ismétlése" : "Off";
        const embed = new MessageEmbed()
        .setDescription(`Loopolva : \`${mode}\` \n Használd többszöt a loop parancsot az ismétlés váltásához`)
        .setColor("RANDOM")
        message.channel.send(embed)
    }
}