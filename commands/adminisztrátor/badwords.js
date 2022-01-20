const Discord = require('discord.js');
module.exports ={
    name: "badwords",
    category: "adminisztrátor",
    run: async (client, message, args) =>{
        const { badwords } = require("../config/badwords.json")
    
        if(!message.member.hasPermission("ADMINISTRATOR")){
    
            let confirm = false;

    
            let i;
    
            for(i = 0; i < badwords.length; i++){
    
                if(message.content.toLowerCase().includes(badwords[i].toLowerCase())){
    
                    confirm = true
                    }
                }
    
                if(confirm) {
    
                    message.delete()
    
                    return message.channel.send("**Ezen a szerveren ilyen szavak használata NEM engedélyezett!**")
                }
            }
    }
}