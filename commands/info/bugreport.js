const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "bugreport",
    aliases : ["bug"],
    timeout: 300000,
    run: async(client, message, args) => {
        const user = client.users.cache.get('617431812754636806');
       const bug = args.join(" ");
       if(!bug) return message.channel.send('Kérlek emítsd meg a bugot!');

       const embed = new MessageEmbed()
       .setTitle('Bug Bejelentve')
       .setColor('RANDOM')
       .addField('Felhasználónév', message.author.toString(), true)
       .addField('Szerver neve', message.guild.name ,true)
       .addField('SzerverID', message.guild.id , true)
       .addField('Bug', bug)
       .setThumbnail(message.author.displayAvatarURL())
       .setTimestamp()
       message.reply(`***Köszönjük hogy megtaláltad, és jelentetted a bugot! Hamarosan fixáljuk! :)***`);
       user.send('embed');
    }
}