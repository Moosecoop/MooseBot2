const Discord = require('discord.js');

module.exports = (c, msg, [message]) => {
    if(msg.author.id == config.ownerID){
        var msg = command.splice(1).join(' ');
        client.guilds.forEach((guild) => {
        guild.generalChannel.sendMessage(message);
        }) 
      }
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "mass",
    description: "for moose only",
    usage: "<str:announcement>",
    usageDelim: "",
    extendedHelp: "",
};