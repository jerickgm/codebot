const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () =>{
    console.log(`${client.user.username} esta preparado!`);
    client.user.setActivity('programando')
});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    
    if (!message.content.startsWith(prefix)) return;

    //Para responder en el canal
    if (message.author.bot) return;
    
    switch (comando) {
        case "hola":
            message.reply("hola!");
            break;
        case "que_haces?":
            message.reply("leyendo un poco de codigo");
            break;
        case "adios":
            message.reply("Hasta luego!");
            break;
        case "mama_huevo":
            message.reply("Tu eres un mmgvo!!");
            break;
        case "puto_volviste!!":
            message.reply("Me fui a depurar humano invesil");
            break;
    };

    //Para conectarse a un canal de voz
    if (!message.guild) return;

    if (comando === 'ingresa') {
    // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('¿Para que me necesitas humano?');
            })
            .catch(console.log);
        } else {
        message.reply('Ingresa primero a un canal de voz, estupido humano');
        }
    }
});


client.login(config.token);