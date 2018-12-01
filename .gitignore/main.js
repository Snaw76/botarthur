const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = "/";

bot.on('ready',() =>{
	bot.user.setPresence({ game: { name: '[/SnoopDog]' , type: 0}});
	console.log('Bot ready !');
});

bot.login('NTE3NzQ3ODc5NDI3OTY0OTQ4.DuPnDw.DkJBS2KVP6F_GnSLyOvhe13Szlg');

bot.on('message', message =>{
	if (message.content === prefix + "Facepalm"){
		message.channel.send("https://www.youtube.com/watch?v=3O8J2locx5o");
	}

	if (message.content === prefix + "SnoopDog"){
		message.channel.send('https://www.youtube.com/watch?v=kP0xRXY6wb0');
	}

	if (message.content === prefix + "ok"){
			message.channel.send('https://www.youtube.com/watch?v=VEx5hNYeZtY');
	}

	if (message.content === prefix + "non"){
		message.channel.send('https://www.youtube.com/watch?v=-07RMay3lwo');
	}
	
	if (message.content === prefix + "rond"){
		message.channel.send('https://cdn3.lebonbon.fr/wp-content/uploads/2016/03/a-okaysign.jpg');
	}
	
	if (message.content === prefix + "régle" ){
		var rule_embed = new Discord.RichEmbed();
			rule_embed.setColor('#E21F1F');
			rule_embed.addField("Régle du serveur");
			rule_embed.setFooter("Certaine régle pourrons a l'avenir être changer");
		message.channel.sendEmbed(rule_embed);
		console.log('Commande Régle demandée !');
	}

});
