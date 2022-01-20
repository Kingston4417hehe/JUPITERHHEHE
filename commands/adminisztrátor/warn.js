const Discord = require('discord.js');
module.exports ={
    name: "warn",
  run: async(client, msg, args) => {
    if(!msg.member.hasPermission('MANAGE_MESSAGES')) return msg.reply('Nincs hozzá jogosúltságod!');

    var user = msg.mentions.users.first();
    if(!user) return msg.reply('Nem jelöltél meg senkit!');

    var member;

    try {
        member = await msg.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return msg.reply('Ez a személy nincs fent a szerveren!');

    var reason = args.splice(1).join(' ');
    if(!reason) return msg.reply('Adj meg egy indokot!');

    var channel = msg.guild.channels.cache.find(c => c.name === 'potato');

    var log = new Discord.MessageEmbed()
    .setTitle('Felhasználó figyelmesztetve')
    .addField('Felhasználó:', user, true)
    .addField('Figyelmeztető:', msg.author, true)
    .addField('Indok:', reason)

    var embed = new Discord.MessageEmbed()
    .setTitle('Figyelmeztetve lettél!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    msg.channel.send(`**${user}** figyelmeztetve lett **${msg.author}** által!`);
}}