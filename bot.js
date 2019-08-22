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
.addField('**__Speed ​​of bot Connection__** ' , `${Date.now() - message.createdTimestamp}` + ' ms`')


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


client.on('message', async message => {//alpha codes & Mrx -Dev
  if (message.content.startsWith(prefix + 'role')) {//alpha codes & Mrx -Dev
    var args = message.content.split(' ').slice(2);
    let member = message.mentions.members.first();
    let role = message.guild.roles.find(r => r.name == args);
    if(!role) return message.channel.send(':no_entry: | I couldnmt find the role!');
    if(role.name === '@everyone') return message.channel.send(':no_entry: | I couldn,t find the role!');
      if (!args) message.reply(`Type Name Role`)
      if (!member) message.reply(`mention someone !`)
      if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('**You Do not have permission** `MANAGE_ROLES`' );
      await message.channel.sendMessage(`**🎁To Give Role
:x: To Cancel the process **`).then(e => {//alpha codes & Mrx -Dev
          e.react("🎁")//alpha codes & Mrx -Dev
          .then(()=> e.react("❌"))//alpha codes & Mrx -Dev
          .then(()=> e.react("🎁")).then(() => c.delete(12000))//alpha codes & Mrx -Dev
          let reaction1Filter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === message.author.id;//alpha codes & Mrx -Dev
          let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;//alpha codes & Mrx -Dev
          let reaction1 = e.createReactionCollector(reaction1Filter, { time: 12000 });//alpha codes & Mrx -Dev
          let reaction2 =e.createReactionCollector(reaction2Filter, { time: 12000 });//alpha codes & Mrx -Dev
          reaction1.on("collect", c => {//alpha codes & Mrx -Dev
            member.addRole(role);
            e.edit(`:white_check_mark: | <@${member.id}> Successfully give The role **${role.name}** .`).then(c => {
               c.delete(5000).then(()=>{
                 msg.delete()
                       })
               })
              }

                  )//alpha codes & Mrx -Dev
                  reaction2.on("collect", c => {//alpha codes & Mrx -Dev
                    e.edit('**Successfully Canceled :x:**').then(c => {
                      c.delete(5000)
                      message.delete()
                      
      })
    })
  }
      )}
      
});


client.login(process.env.BOT_TOKEN);
