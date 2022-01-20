const ms = require('ms');

module.exports = {
    name: 'gwreroll',
    run: async(client, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS" || "BAN_MEMBERS") && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Nincsen jogod a parancshoz');
    }

    if(!args[0]){
        return message.channel.send('ERR :x: - Kérlek add meg a nyereményjáték ID-ját');
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        return message.channel.send('Unable to find a giveaway for `'+ args.join(' ') +'`.');
    }

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        message.channel.send('A reroll sikeres');
    })
    .catch((e) => {
        if(e.startsWith(`${giveaway.messageID} a nyereményjáték még nem fejeződött be`)){
            message.channel.send('Kérlek várj amíg befejeződik a nyereményjáték');
        } else {
            console.error(e);
            message.channel.send('Kérlek várj amíg befejeződik a nyereményjáték');
        }
    });

}
}