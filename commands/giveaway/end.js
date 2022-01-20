const ms = require('ms');

module.exports = {
    name: 'gwend',
    run: async(client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS" || "BAN_MEMBERS") && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send('ERR :x: - Nincs hozzá jogod');
    }

    if(!args[0]){
        return message.channel.send('ERR :x: - Kérlek add meg a nyereményjáték ID-ját');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('ERR :x: - Nem találtam a nyereményjátékot `'+ args.join(' ') + '`.');
    }

    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        message.channel.send('A nyereményjáték befejeződik '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' ennyi másodperc múlva...');
    })
    .catch((e) => {
        if(e.startsWith(` ${giveaway.messageID} A nyereményjáték befejeződött`)){
            message.channel.send('A nyereményjáték már befejeződött!');
        } else {
            console.error(e);
            message.channel.send('A nyereményjáték már befejeződött!');
        }
    });

}
}