const Discord = require("discord.js");

module.exports = async (bot, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommand){
        let command = require("../Commande/" + interaction.commandName);
        command.run(bot, interaction, command.options)
    }
}
