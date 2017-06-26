const Discord = require('discord.js');

exports.run = (c, msg, [message]) => {

    var msg = command.splice(1).join(' ');
    c.guilds.forEach((guild) => {
        guild.defaultChannel.sendMessage(message);
    });

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
    usage: "<message:str>",
    usageDelim: "",
    extendedHelp: "",
};