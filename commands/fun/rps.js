const Discord = require('discord.js');
module.exports ={
    name:"rps",
    aliases: ["kopapirollo"],
    run: async(client, message, args) =>{
        let embed = new Discord.MessageEmbed()
        .setTitle("Kő, Papír, Olló")
        .setDescription("Reagálj a játékhoz")
        .setTimestamp()
        var msg = await message.channel.send(embed)
        await msg.react("🗻")
        await msg.react("✂️")
        await msg.react("📜")

        const filter = (reaction, user) =>{
            return[`🗻`,`✂️`,`📜`].includes(reaction.emoji.name) && user.id === message.author.id;
        }


        const choices = [`🗻`,`✂️`,`📜`]
        const me = choices[Math.floor(Math.random() * choices.length)]
        var time = time;
        msg.awaitReactions(filter, {max: 1, time: 6000, error: [time]}).then(
            async(collected) => {
                const reaction = collected.first()
                var result = new Discord.MessageEmbed()
                .setTitle("Végeredmény!")
                .addField(`Te választásod`, `${reaction.emoji.name}`)
                .addField(`A robot választása`, `${me}`)
                await msg.edit(result)

                if((me === "🗻" && reaction.emoji.name === "✂️") ||
                (me === "✂️" && reaction.emoji.name === "📜") ||
                (me === "📜" && reaction.emoji.name === "🗻")){
                    message.reply("Vesztettél!");
                } else if(me === reaction.emoji) {
                    return message.reply("Senki sem győzött!");
                } else {
                    return message.reply("Nyertél!");
                
                }
            
            })
            .chace(collected =>{
                message.reply('Kifogytál az időből!')
            })
    }
}