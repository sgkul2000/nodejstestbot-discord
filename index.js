const Discord = require("discord.js");
// const config = require("./config.json");

// configuring environment variable
const dotenv = require('dotenv')
dotenv.config()

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Follow @ppradyoth on IG. Also, This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`Follow @ppradyoth on IG. Also, The sum of all the arguments you provided is ${sum}!`);
 }
  else if (command==="bende") {
   message.reply(`MANOJPKUMARURS alias BENDE is Mysuru's one and only Dasaragrapher`);
}  

});

client.login(process.env.BOT_TOKEN);
