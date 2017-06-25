const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");

exports.run = (c, msg) => {
    let uptime = moment.duration(c.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    let statsEmbed = new Discord.RichEmbed()
        .setTitle('Uptime')
        .setColor('#66b3ff')
        .setTimestamp()
        .addField(':timer:', `**${uptime}**`, true);

    msg.channel.sendEmbed(statsEmbed);
};

exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
  name: "uptime",
  description: "Returns Moosebot's uptime",
  usage: "",
  usageDelim: "",
};
