const Discord = require('discord.js');

exports.run = (client, msg) => {
    /*let guilds = client.guilds;
    let guildMap = new map();
    let guildList = [];

    let i = 0;
    guilds.forEach(function (guild) {
        let inviteLink = guild.fetchInvites();
        guildMap.set(`Guild ${i}`, `${guild.name} - ID: ${guild.id} - Members: ${guild.members.size}`);
        i++;
    }, this);*/




    let servers = client.guilds.reduce((list, guild) => { list.push(`ID: ${guild.id} | Name: ${guild.name} | Members: ${guild.memberCount} | Invite: ${guild.fetchInvites()}`); return list; }, []);
    console.log(`GUILDS:\n${guild.fetchInvites()}`);
    msg.channel.send(`\`\`\`**Guilds**\n${servers.join('\n')}\n Do .createInvite <guildID>\`\`\``);
};

exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: ["listguild", "listguilds", "guilds"],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "guildlist",
    description: "lists MooseBot's current guilds.",
    usage: "",
    usageDelim: "",
};
