const Discord = require(`discord.js`);



module.exports = {
    name: "serverinfo",
    aliases: ["szerverinfo"],
    run: async (client, message, args) => {
      const members = message.guild.members.cache;
      const create = message.guild.createdAt.toLocaleDateString();
      const channels = message.guild.channels.cache;
      const verificationLevels = {
      NONE: '`Nincs`',
      LOW: '`Alacsony`',
      MEDIUM: '`Közepes`',
      HIGH: '`(╯°□°）╯︵ ┻━┻`',
      VERY_HIGH: '`┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻`'
      };
      const notifications = {
      ALL: '`Minden`',
      MENTIONS: '`Említések`'
      };  
      const regions = {
      brazil: 'Brazilía',
      europe: 'Europa',
      hongkong: 'Hong Kong',
      india: 'India',
      japan: 'Japán',
      russia: 'Oroszorszáh',
      singapore: 'Színgapúr',
      southafrica: 'Dél-Afrika',
      sydeny: 'Sydeny',
      'us-central': 'Közép-Amerika',
      'us-east': 'Kelet-Amerika',
      'us-west': 'Nyugat-Amerika',
      'us-south': 'Dél-Amerika'
      };
      var infoembed = new Discord.MessageEmbed()
      .setAuthor(`${message.guild.name}`)
      .setColor('#5CC5FF')
      .setTitle("**Szerver információk:**")
      .setThumbnail(message.guild.iconURL())
      .addFields(
        {
          name: '**Szerver neve:**',
          value: `${message.guild.name}`,
          inline: true
        },
        {
          name: '**Szerver ID:**',
          value: `${message.guild.id}`,
          inline: true
        },
        {
          name: '**Szabályzati Beállítás:**',
          value: (message.guild.rulesChannel) ? `${message.guild.rulesChannel}` : 'Nincs',
          inline: true
        },
        {
          name: '**AFK időkorlát:**',
          value: `${message.guild.afkTimeout / 60} perc`,
          inline: true
        },
        {
          name: '**AFK Csatorna:**',
          value: (message.guild.afkChannel) ? `${message.guild.afkChannel.name}` : 'Nincs',
          inline: true
        },
        {
          name: '**Régió**',
          value: `${message.guild.regions}`,
          inline: true
        }
      )
      .setTimestamp();

      message.channel.send(infoembed);
    }
}