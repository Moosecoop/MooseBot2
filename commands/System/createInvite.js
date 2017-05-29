exports.run = (client, msg, [guildID]) => {
    guild = guildID;
    guild.addMember(msg.author)
};

exports.conf = {
    enabled: true,
    runIn: ["text", "dm", "group"],
    aliases: [],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "createInvite",
    description: "created an invite (owner only - doesnt work)",
    usage: "<int:guildID>",
    usageDelim: "",
};
