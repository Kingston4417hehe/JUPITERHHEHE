const Discord = require('discord.js');
module.exports ={
    name: "jail",
    category: "fun",
    run: async (client, message, args) =>{

            {
                    let link = `https://some-random-api.ml/canvas/jail/?avatar=${message.author.avatarURL({ format: 'png' })}`
                    let attachment = new Discord.MessageAttachment(link, 'jail.png');
                    let embed = new Discord.MessageEmbed()
                    .setTitle(`Profilkép`)
                    .setColor(`RANDOM`)
                    .attachFiles(attachment)
                    .setImage('attachment://jail.png')
                    .setTimestamp();
                    
                    message.channel.send(embed)
                }
            }
}