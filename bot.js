const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "!";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`Security Legend `,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});



client.on('message', message => {
   if (message.content === "!id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name :",`${message.author.username}`, true)
  .addField('Tag :',"#" +  message.author.discriminator, true)
  .addField("ID :", message.author.id, true)
  .addField("Create Account :", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {   
  if (message.content === "!ping") {
   const embed = new Discord.RichEmbed()

.setColor("RANDOM")
.addField('**__Your Ping He is :__** ' , `${Date.now() - message.createdTimestamp}` + ' ms`')


message.channel.sendEmbed(embed);
 }
});


client.on('message', function(msg) {
  let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
  let region = {
      "brazil": "Brazil",
      "eu-central": "Central Europe",
      "singapore": "Singapore",
      "Russia": "Russia",
      "us-central": "U.S. Central",
      "sydney": "Sydney",
      "us-east": "U.S. East",
      "us-south": "U.S. South",
      "us-west": "U.S. West",
      "eu-west": "Western Europe",
      "vip-us-east": "VIP U.S. East",
      "london": "London",
      "amsterdam": "Amsterdam",
      "hongkong": "Hong Kong"
  };

    if (msg.content.startsWith(prefix + 'server')) {
    if (!msg.guild) return message.reply('**Only Servers | :x:**')
console.log(`${msg.author.username} Has Ran Server Command`)
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`${msg.guild.name}`)
    .addField('**[❖] Server Name **',`[** __${msg.guild.name}__ **]`,true)
    .addField('**[❖] OwnerShip **',`**${msg.guild.owner}**`,true)
    .addField('**[❖] Server ID **',`**${msg.guild.id}**`,true)
    .addField('**[❖] Members Count **',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('**[❖] Region **',`[** __${region[msg.guild.region]}__** ]`,true)
    .addField('**[❖] Text Channels **',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('**[❖] Voice Channels **',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('**[❖] Created Server **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


client.on('ready', () => {
  client.user.setPresence('dnd')
    client.user.setGame(`!help | Servers : ${client.guilds.size} `)
	console.log(`Logged In As ${client.user.tag}!`);
	console.log('Ready! Go,');
	console.log('By RG, Jan0ooo.#0001')
 });


 
client.on('message', message => {
  if (message.content === "!help") {
  let embed = new Discord.RichEmbed()
.addField('     **__معلومات السيرفر__** ' ,' ** !server ** ')
.addField('     **__معلومات الحساب__** ' ,' ** !id ** ')
.addField('     **__مسح الشات__** ' , '**!clear** ')
.addField('     **__سرعة الأتصال الخاصة بك** ' , '**!ping** ')
.addField('للأستفسار تواصل معنا : ' , '**! https://discord.gg/ENgRsCF**')
.addField('**Bots .: **' , '**https://discordapp.com/api/oauth2/authorize?client_id=602710735713468438&permissions=8&scope=bot**')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
 }
});


client.login(process.env.BOT_TOKEN);
