const bestlist = require('./dist/index.js');
const client = new bestlist();

client.setToken('9nzNAQJwH4D3efWJcJpH.best.api.token.zTJwgHvFEatg6gdigsv5');

async function getaBot() {
    const word = await client.getUser('726449359167684734');
    return console.log(word);
}

getaBot()