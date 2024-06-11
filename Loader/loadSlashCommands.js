// noinspection ES6MissingAwait

const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord.js") //Les {} permettent de récupérer une commande sans passer pas le "Discord."
module.exports = async bot => {

    let commands = [];

    bot.commands.forEach(async command => {

        let slashcommand = new Discord.SlashCommandBuilder()
            .setName(command.name)
            .setDescription(command.description)
            .setDMPermission(command.dm)
            .setDefaultMemberPermissions(command.permission === "Aucune" ? null : commande.permission) //Vérifie si command.permission == "Aucune" si oui == null sinon commande.permission

        if (command.option?.length >= 1) { //Si command.option existe et que ça longueur est supérieur ou égale à 1
            for (let i = 0; i < command.options.length; i++) {
                slashcommand[`add${command.options[i].type.slice(0, 1).toLowerCase()
                + command.options[i].type.slice(1, command.options[i].type.length)}Option`](option => option.setName(command.options[i].name)
                    .setDescription(command.options[i].description)
                    .setRequired(command.options[i].required));
            }
        }

        await commands.push(slashcommand);
    })

    const rest = new REST({version: "10"}).setToken(bot.token);

    await rest.put(Routes.applicationCommands(bot.user.id), {body: commands});

    console.log("Les slashs commandes sont créées avec succès !");
}