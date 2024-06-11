const Discord = require("discord.js"); //import du package discord.js
const intents = new Discord.IntentsBitField(3276799);

const bot = new Discord.Client({intents}); //Création du bot
//Chargement de nos loader
const loadCommands = require("./Loader/loadCommands");
const loadEvents = require("./Loader/loadEvents");

const config= require("./config"); //import de config.js

bot.commands = new Discord.Collection();

bot.login(config.token); //récupération du token dans variable config
//Executions de nos loader avec notre bot en param
loadCommands(bot);
loadEvents(bot);