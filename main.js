const Discord = require("discord.js"); //import du package discord.js
const intents = new Discord.IntentsBitField(3276799);
const bot = new Discord.Client({intents}); //Création du bot
const loadCommands = require("./Loader/loadCommands");
const config= require("./config"); //import de config.js

bot.commands = new Discord.Collection();

bot.login(config.token); //récupération du token dans variable config
loadCommands(bot);

bot.on("messageCreate", async message => {
    console.log("Un message a été envoyé voici sont contenu : " + message.content);
    if(message.content == "!ping"){
        console.log("test2")
        return bot.commands.get("ping").run(bot, message);
    }
})

bot.on("ready", () => { //fonction assync quand le bot est allumé
    console.log(bot.user.tag + " est bien en ligne !"); //récupérat!ion du tag du bot
});

