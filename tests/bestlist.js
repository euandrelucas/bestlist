const bestlist = require('../dist/index.js');
const client = new bestlist();

client.setToken('9nzNAQJwH4D3efWJcJpH.best.api.token.zTJwgHvFEatg6gdigsv5'); // fake token

async function getaBot() {
    const robot = await client.getBot('880173509077266483'); // https://bestlist.online/bots/880173509077266483
    return robot
}

getaBot().then(console.log)