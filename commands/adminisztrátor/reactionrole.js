const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "reactionrole",
    run: async(client, message, args) =>{
        const channelID = message.mentions.channels.first();
        if(!channelID) return message.reply("Kérlek adj meg egy csatornát ahol legyen az az embed, aminél a rangokat lehet kiválasztani\n `Például: ?reactionrole #<csatorna> <Szöveg>`")
       
       
       
        const desc = args.slice(1).join(" ")
        if(!desc) return message.reply("Kérlek adj meg egy valós szöveget\n `Például: ?reactionrole #<csatorna> <Szöveg>`")
        const role1 = message.guild.roles.cache.find(role => role.name === "@~ Partner Ping ~@")
        const role2 = message.guild.roles.cache.find(role => role.name === "@~ Giveaway ping ~@")
        const role3 = message.guild.roles.cache.find(role => role.name === " @~ Hírek Ping ~@")


        const emoji1 = "1️⃣";
        const emoji2 = "2️⃣";
        const emoji3 = "3️⃣";






        var embed = new MessageEmbed()
        .setColor(0xff00dd)
        .setTitle("Vedd fel a rangokat!")
        .setDescription(desc)

        var msgembed = await channelID.send(embed)
        await msgembed.react(emoji1)
        await msgembed.react(emoji2)
        await msgembed.react(emoji3)

        client.on('messageReactionAdd', async (reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return
            if(!reaction.message.guild) return;


            if(reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role1)
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role2)
            }
            if (reaction.emoji.name === emoji3) {
                await reaction.message.guild.members.cache.get(user.id).roles.add(role3)
            }
        
        } else {
            return;
        }
        });
        
        client.on('messageReactionRemove', async (reaction, user) =>{
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return
            if(!reaction.message.guild) return;


            if(reaction.message.channel.id == channelID) {
                if (reaction.emoji.name === emoji1) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role1)
                }
                if (reaction.emoji.name === emoji2) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role2)
            }
            if (reaction.emoji.name === emoji3) {
                await reaction.message.guild.members.cache.get(user.id).roles.remove(role3)
            }
        
        } else {
            return;
        }
        })
    }
}