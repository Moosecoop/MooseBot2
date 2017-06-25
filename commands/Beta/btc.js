const coinTicker = require('coin-ticker');
const Discord = require('discord.js');

exports.run = (c, message) => {
  var embed = new Discord.RichEmbed()
      embed.setTitle('Bitcoin')
      embed.setThumbnail('https://bitcoin.org/img/icons/opengraph.png')
      embed.setTimestamp()
      embed.setAuthor('MooseBot');
      
      
      
  let Ttick = {};
  coinTicker('bitfinex', [ 'btcusd']) // when no asset pair is specified, coinTicker will default to 'btcusd'
.then( tick => {
  console.log(tick)
  Ttick = tick;
  embed.addField('Worth', `$${Ttick.last}USD`)
  
})



            message.channel.sendEmbed(embed);
            /*var Client = require('coinbase').Client;
var client = new Client({'apiKey': mykey, 'apiSecret': mysecret});

            client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, obj) {
  console.log('total amount: ' + obj.data.amount);
});*/
  }

exports.conf = {
  enabled: true,
  runIn: ["text", "dm"],
  selfbot: false,
  aliases: ["currency", "crypto", "worth", "price"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
    name: 'btc',
    description: 'gets the current value of a cryptocurrency',
    usage: ''
}
