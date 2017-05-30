const ytdl = require('ytdl-core');

exports.run = (client, msg, [link]) => {
  const voiceChannel = msg.member.voiceChannel;
  let options = {
    seek: 0,
    volume: .5,
    passes: 3
  };
  
  if (!voiceChannel) return msg.reply(`Please be in a voice channel first!`);
  voiceChannel.join()
    .then(connnection => {
      let message = msg.reply('Playing song');
      const stream = ytdl(link, { filter: 'audioonly' });
      const dispatcher = connnection.playStream(stream, options);
      dispatcher.on('end', () => voiceChannel.leave());
    });
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: [],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "play",
  description: "plays a youtube video's audio (requires yt video link)",
  usage: "<link:str>",
  usageDelim: "",
};

