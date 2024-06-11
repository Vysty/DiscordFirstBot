// noinspection ES6MissingAwait

const fs = require("fs");

module.exports = async (bot) => {
    //let FilesInCommande = fs.readdirSync("./Commande");

    fs.readdirSync("./Event").filter(f => f.endsWith(".js")).forEach(async file => {

        let event = require(`../Event/${file}`); //Récupère la commande
        bot.on(file.split(".js").join(""), event.bind(null, bot));

        console.log("Evènement " + file + " chargé avec succès !");
    })
}