const Discord = require('discord.js');

module.exports = {
    name: "ping", 
    run: async(client, message, args) => {
        var yourping = new Date().getTime() - message.createdTimestamp
        var botping = Math.round(client.ws.ping)
        
        message.channel.send(`A te pinged -🏓 : ${yourping} \nA bot pingje -🏓 : ${botping}`)
}}