const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions } = require(`discord.js`);

const prefix = 'PUT YOUR PREFIX HERE';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const welcome = require('./welcome.js')

client.on("ready", () => {

  welcome(client)
  console.log(`${client.user.tag}, Im connected with succes !`)


client.on("messageCreate", (message) => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);

  const command = args.shift().toLowerCase();

  // message array

  const messageArray = message.content.split(" ");
  const argument = messageArray.slice(1);
  const cmd = messageArray[0];

// Ping commande
  
if (command === 'ping') {
  
  const embed = new EmbedBuilder()
  .setColor("BLUE")
  .setTitle("Pong :ping_pong: !")
  .setDescription(`${message.member}*, my ping* is : **${client.ws.ping}ms**`)
  .setTimestamp()
    .setThumbnail(message.author.displayAvatarURL())
  message.channel.send({ embeds: [embed] })
}
  

})

client.login("PUT YOUR TOKEN HERE")
