const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg) => {
  const komada = require(`${client.coreBaseDir}/package.json`); // eslint-disable-line
  const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  let shard = client.shard;
  let guilds = client.guilds.size;
  let users = client.users.size;
  let channels = client.channels.size;
  let uptime = (client.uptime);
  let nodev = process.version;
  let platform = process.platform;
  let memUsage = Math.round(process.memoryUsage().rss / 1024 / 1000);
  let hosting = null;
  
  if(shard === null) {
    shard = 'N/A - Not Sharding';
  }

  if(platform === "win32") {
    hosting = "Windows";
  } else if(platform === "darwin") {
    hosting = "MacOS";
  } else {
    hosting = "Linux";
  }

  let statsEmbed = new Discord.RichEmbed()
    .setTitle('MooseBot')
    .setAuthor('MooseBot', 'https://cdn.discordapp.com/app-icons/256973272841715712/65aa90fd92e81b5870df3542ec0dfebb.jpg')
    .setColor('#66b3ff')
    .setDescription(`Here's some info about MooseBot`)
    .setFooter('MooseBot is built by Moosecoop', 'https://cdn.discordapp.com/app-icons/256973272841715712/65aa90fd92e81b5870df3542ec0dfebb.jpg')
    .setThumbnail('https://cdn.discordapp.com/app-icons/256973272841715712/65aa90fd92e81b5870df3542ec0dfebb.jpg')
    .setTimestamp()
    .setURL('https://discordapp.com/oauth2/authorize?client_id=241714829788708864&scope=bot&permissions=0')
    .addField('Shard', `Shard #${shard}`, true)
    .addField('Guilds', `${guilds}`, true)
    .addField('Channels', `${channels}`, true)
    .addField('Useres', `${users}`, true)
    .addField('Uptime', duration, true)
    .addField('Node Version', `${nodev}`, true)
    .addField('Memory Used', `${Math.round(process.memoryUsage().rss / 1024 / 1000)}mb`, true)
    .addField('Hosting Platform', `${hosting}`, true);

  msg.channel.sendEmbed(statsEmbed);

};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "stats",
  description: "Provides some details about the bot and stats.",
  usage: "",
  usageDelim: "",
};
