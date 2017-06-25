const komada = require('komada');
const token = require('./tokens.json');

komada.start({
    botToken: token.discord,
    ownerID: '199621462586425346',
    clientID: '241714829788708864',
    prefix: 'm?',
    clientOptions: {
        fetchAllMembers: true,
    },
});
