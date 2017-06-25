const snekfetch = require('snekfetch');
const tokens = require('../../tokens.json');

exports.run = (c, msg) => {
    snekfetch.post(`https://discordbots.org/api/bots/241714829788708864/stats`)
        .set('Authorization', tokens.dbl)
        .send({ server_count: c.guilds.size })
        .then(console.log('Updated dbots.org status.'))
}

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "update",
    description: "for moose only",
    usage: "",
    usageDelim: "",
    extendedHelp: "",
};