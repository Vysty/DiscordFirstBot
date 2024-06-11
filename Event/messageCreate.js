const Discord = require("discord.js");

module.exports = async (bot, message) => {
    let prefix = "?";

    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].slice(prefix.length) //Récupère le ou les premiers caractère (en fonction de la taille du prefix) pour vérifié si il(s) corresponde(nt) a notre prefix
    let args = messageArray.slice(1); //Correspond à une liste de tout les arguments

    if(message.author.tag == bot.user.tag){ //Si le createur est le bot
        return;
    }

    if(!message.content.startsWith(prefix)){ //Pas le bon prefix
        return;
    }

    let command = require("../Commande/" + commandName);
    if(!command){
        return message.reply(" tu ne m'as pas fourni de commande, !help si tu as un problème");
    }

    command.run(bot, message, args);
}