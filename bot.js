const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.help | .inv | ${client.guilds.size} Servers `,"http://twitch.tv/iMericPvP")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
    var names = ["Meric Bot","One Bot","Duy0 Bot","Robot Bot","Bot Bot","Upload Bot","Normal Bot","Alpha Bot","lol Bot","3zoz Bot"];
        if(message.content.startsWith(prefix + 'bot names')) {
             var alpha = new Discord.RichEmbed()
    .setTitle("**Get a Name For You Bot !**")
    .addField(names[Math.floor(Math.random() * names.length)])
    message.channel.sendEmbed(alpha);
        }
    });
	





	client.on('message', message => {
    if (message.content.startsWith(".bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});



client.on("message", message => {
      if (message.content === ".ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Pong!:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
  if(message.content === '.inv') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=481153982354423808&scope=bot&permissions=36760572')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});

client.on('message', message => {
  if(message.content === '.support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/YMhGdtb')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    message.channel.send(`\`${message.guild.memberCount}\` : عدد الاعضاء المستلمين`); 
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		var bc = new Discord.RichEmbed()
			.addField(':earth_americas:  » سيرفر : ', message.guild.name)
			.addField(':thinking:  » راسل : ', message.author.username)
            .addField(':pencil:  » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});



client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'say')) {
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createWebhook(message.author.username, message.author.avatarURL) 
    .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});

 client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","HulerGames"));
    }); 
