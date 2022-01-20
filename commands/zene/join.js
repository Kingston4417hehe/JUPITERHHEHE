module.exports = {
    name: 'join',
    aliases: ['summon', 'enter'],
    run: async(client, message, args) => {

        const voiceChannel = message.member.voice.channel

        if (!voiceChannel) return message.channel.send("Kérlek lépj be egy voice channelbe")

        try {
            await voiceChannel.join().then(connection => {
                connection.voice.setSelfDeaf(true)
            })
        } catch(error) {
            console.log(`ERROR - Nem tudok belépni a voice channelbe : ${error}`)
            return message.channel.send(`ERROR - Nem tudok belépni a voice channelbe : ${error}`)
        }
    }
}