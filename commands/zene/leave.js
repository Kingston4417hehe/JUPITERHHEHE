module.exports = {
    name: 'leave',
    aliases: ['dc', 'disconnect', 'exit'],
    run: async(client, message, args) => {

        const voiceChannel = message.member.voice.channel

        if (!voiceChannel) return message.channel.send("Nem vagyok benne egy voice channelbe sem")

        try {
            voiceChannel.leave()
        } catch(error) {
            console.log(`ERROR - Nem tudok kilépni a voice channelből : ${error}`)
            return message.channel.send(`ERROR - Nem tudok kilépni a voice chanelből : ${error}`)
        }
    }
}