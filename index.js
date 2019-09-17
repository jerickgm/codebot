const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () =>{
    console.log(`${client.user.username} esta preparado!`);
    client.user.setActivity("programando!!!!.")
});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    
    switch (comando) {
        case "hola":
            message.reply("hola!");
            break;
        case "que_haces?":
            message.reply("leyendo un poco de codigo");
            break;
        case "adios":
            message.channel.send("Hasta luego!");
            break;
        case "mama_huevo":
            message.channel.send("Tu eres un mmgvo!!");
            break;
        case "puto_volviste!!":
            message.channel.send("Me fui a depurar humano invesil");
            break;
    };
});


client.login(config.token);