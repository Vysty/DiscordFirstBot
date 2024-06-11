// noinspection ES6MissingAwait

const fs = require("fs");

module.exports = async (bot) => {
    let FilesInEvent = fs.readdirSync("./Event");

    FilesInEvent.filter(f => f.endsWith(".js")).forEach(async file => { //Pour chacun des fichiers JS qui sont présent dans Event en async

        let event = require(`../Event/${file}`); //Récupère la commande
        bot.on(file.split(".js").join(""), event.bind(null, bot)); //Associe les event au bot pour crée des comportements type

        console.log("Evènement " + file + " chargé avec succès !");
    })
}