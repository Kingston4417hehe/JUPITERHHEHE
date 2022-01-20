const Discord = require('discord.js');
module.exports ={
    name: "error",
    category: "fun",
    run: async (client, message, args) =>{
            if(args[0]){
              var venyaerro = new Discord.MessageEmbed()
              .setAuthor(member.user.username)
              .setColor("#ff00dd")
              .setImage("https://media.discordapp.net/attachments/919243851120652419/919526152840822794/unknown.png" + args.join(" "));
          
              message.channel.send(venyaerro)
            } else {
              message.reply("Írj szöveget!")
            }
          }
}