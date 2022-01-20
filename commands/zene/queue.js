const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'queue',
    aliases: ['q', 'list'],
    run: async(client, message, args) => {
        let queue = client.distube.getQueue(message);
        if (!queue) {
            const queueError = new MessageEmbed()
            .setDescription("Nincs mit lejátszani")
            .setColor("RANDOM")
            return message.channel.send(queueError)
        }
        let q = queue.songs.map((song, i) => {
            return `${i === 0 ? "Most megy:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``
        }).join("\n");

        const embed = new MessageEmbed()
        .setDescription(`**Queue: ** \n\n  ${q}`)
        .setColor("RANDOM")

        message.channel.send(embed)
    }
}