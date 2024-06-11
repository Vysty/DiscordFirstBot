const fs = require("fs");

module.exports = async (bot) => {
    //let FilesInCommande = fs.readdirSync("./Commande");

    fs.readdirSync("./Commande").filter(f => f.endsWith(".js")).forEach(async file => {

        let command = require(`../Commande/${file}`); //Récupère la commande

        if(!command.name || typeof command.name !== "string"){ //Vérification du nom de la commande
            throw new TypeError("La commande " + file + " n'a pas de nom !");
        }

        bot.commands.set(command.name, command); //Crée une commande avec le nom de la commande rattaché au fichier command ("testcommande.js" par exemple)
        console.log("Commande " + file + " chargée avec succès !");
    })
}