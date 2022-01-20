const { MessageEmbed } = require('discord.js');
const { version } = require('discord.js');
const os = require('os');

    module.exports = {
        name:"botinfo",
        run: async (client, message, args) => {
            const embed = new MessageEmbed()
                .setTitle('Bot Statisztkák')
                .setColor('RANDOM')
                .addFields(
                    {
                        name: '<:server:879374547864936448> Szerverek',
                        value: `Összesen ${client.guilds.cache.size} szerveren.`,
                        inline: true
                    },
                    {
                        name: '<:channels:879515584407162982> Csatornák',
                        value: `Összesen ${client.channels.cache.size} ennyi csatorna.`,
                        inline: true
                    },
                    {
                        name: '<:user:879371469048664115> Felhasználók',
                        value: `Összesen ${client.users.cache.size} ennyi felhasználó.`,
                        inline: true
                    },
                    {
                        name: '<:djs:879371469094805564> Discord.js verzió',
                        value: `${version}`,
                        inline: true
                    },
                    {
                        name: '<:node:879371469015097374> Node.js verzió',
                        value: `${process.version}`,
                        inline: true
                    },
                    {
                        name: '<:computer:879379500322922507> ARCH',
                        value: `\`${os.arch()}\``,
                        inline: true
                    },
                    {
                        name: '<:computer:879379500322922507> Platform',
                        value: `\`${os.platform()}\``,
                        inline: true
                    },
                    {
                        name: '<:memory:879371468876701786> Memória',
                        value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`,
                        inline: true
                    },
                    {
                        name: '<:cpu:879371469052846110> CPU',
                        value: `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,
                        inline: true
                    },
                )   
            await message.channel.send(embed)
        }
    }