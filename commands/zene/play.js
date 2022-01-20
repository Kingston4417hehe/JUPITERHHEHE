const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "play",
    aliases: ["p"],
    run: async (client, message, args) => {
      if (!message.member.voice.channel) {
        const playError = new MessageEmbed()
          .setDescription("Nem vagy bent egy voice channelben sem")
          .setColor("RANDOM")
        return message.channel.send(playError)
      }
      const voiceChannel = message.member.voice.channel
      const permissions = voiceChannel.permissionsFor(message.client.user)
      if (!permissions.has("SPEAK")) {
        const playError2 = new MessageEmbed()
          .setDescription("Ebben a voice channelben nincsen jogom beszélni")
          .setColor("RANDOM")
        return message.channel.send(playError2)
      }
      if (!permissions.has("CONNECT")) {
        const playError3 = new MessageEmbed()
          .setDescription("Nincsen jogom csatlakozni ahhoz a voice channelhez amelyikben te vagy")
          .setColor("RANDOM")
        return message.channel.send(playError3)
      }

      let songName = args.slice(0).join(" ")
      if (!songName) {
        const playError2 = new MessageEmbed()
          .setDescription("A zene nevét vagy a linkjét add meg")
          .setColor("RED")
        return message.channel.send(playError2)
      }

      try {
        voiceChannel.join().then(connection => {
          connection.voice.setSelfDeaf(true)
        })
        client.distube.play(message, songName)
      } catch (err) {
        message.channel.send(`ERROR- Nem tudom lejátszani a zenét! \n Error: ||${err}||`)
      }
  },
};