
const Discord = require('discord.js');
const TicTacToe = require('discord-tictactoe');
require('dotenv').config();
const client = new Discord.Client();
const prefix = process.env.PREFIX;
const fs = require('fs');
client.commands = new Discord.Collection();
const eco = require("discord-economy");
const settings = {
  prefix: '-',
  token: 'YOURTOKEN'
}
new TicTacToe({
  language: 'en',
  command: '-ttt'
}, client);

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}
client.once("ready", () => {

  console.log("LucidBot is online!");
  client.user.setActivity(`Will migrate to repl.it hosting soon!|-help`, { type: "" }).catch(console.error);
});


client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  {

  } if (command === 'play') {
    client.commands.get('play').execute(message, args );

  } else if (command === 'tradingrules') {
    client.commands.get('tradingrules').execute(message, args, Discord);

  } else if (command === 'rules') {
    client.commands.get('rules').execute(message, args, Discord);

  } else if (command === 'leave') {
    client.commands.get('leave').execute(message, args);

  } else if (command === 'ping') {
    client.commands.get('ping').execute(message, args);

  } else if (command === 'musty') {
    client.commands.get('musty').execute(message, args);

  } else if (command === 'mertzy') {
    client.commands.get('mertzy').execute(message, args);

  } else if (command === 'jonsandman') {
    client.commands.get('jonsandman').execute(message, args);

  } else if (command === 'sunlesskhan') {
    client.commands.get('sunlesskhan').execute(message, args);

  } else if (command === 'cbell') {
    client.commands.get('cbell').execute(message, args);

  } else if (command === 'lethamyr') {
    client.commands.get('lethamyr').execute(message, args);

  } else if (command === 'fluump') {
    client.commands.get('fluump').execute(message, args);

  } else if (command === 'rankup') {
    client.commands.get('rankup').execute(message, args);

  } else if (command === 'pong') {
    client.commands.get('pong').execute(message, args);
    
  } else if (command === 'purge') {
    client.commands.get('purge').execute(message, args);     
   
  } else if (command === 'mute') {
    client.commands.get('mute').execute(message, args);

  } else if (command === 'unmute') {
    client.commands.get('unmute').execute(message, args);

  } else if (command === 'help') {
    client.commands.get('help').execute(message, args, Discord);
    
  } else if (command === 'leave') {
    client.commands.get('leave').execute(message, args); 
  } else if (command === 'meme') {
    client.commands.get('meme').execute(message, args);

  } else if (command === 'hate') {
    client.commands.get('hate').execute(message, args);

  } else if (command === 'axile') {
    client.commands.get('ytaxile').execute(message, args);

  } else if (command === 'andreas') {
    client.commands.get('ytandreas').execute(message, args);

  } else if (command === 'lucid') {
    client.commands.get('lucid').execute(message, args);

  } else if (command === 'prabz') {
    client.commands.get('prabz').execute(message, args);

  } else if (command === 'valyder') {
    client.commands.get('valyder').execute(message, args);

  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);

  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);

  } else if (command === 'pog') {
    client.commands.get('pog').execute(message, args);

  } else if (command === 'simp') {
    const simptarget = message.mentions.users.first();
    if (simptarget) {
      message.channel.send(`Love your content ${simptarget}`)
      
    } else if (!simptarget) {
      message.channel.send('Love your content mate.')
    }
    
  } else if (command === 'pogchamp') {
    client.commands.get('pog').execute(message, args);

  } else if (command === 'announcement') {
    client.commands.get('announcement').execute(message, args, Discord);

  } else if (command === 'suggest') {
    client.commands.get('suggest').execute(message, args, client, Discord);

  } else if (command === 'die') {
    client.commands.get('die').execute(message, args);

  } else if (command === 'carb') {
    client.commands.get('carb').execute(message, args);

  } else if (command === 'reactrole') {
    client.commands.get('reactrole').execute(message, args, Discord, client);

  } else if (command === 'admincoms') {
    client.commands.get('admincoms').execute(message, args, Discord);

  } else if (command === 'invite') {
    client.commands.get('invite').execute(message, args);

  } else if (command === 'avatar') {
    const target = message.mentions.users.first();
    if (target) {
      message.channel.send(target.displayAvatarURL());

    } else if (!target) {
      message.channel.send(message.author.displayAvatarURL());
    }
  }
});


client.on('message', async message => {

  //This reads the first part of your message behind your prefix to see which command you want to use.
  var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];

  //These are the arguments behind the commands.
  var args = message.content.split(' ').slice(1);

  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

  if (command === 'bal') {

    var output = await eco.FetchBalance(message.author.id)
    message.channel.send(`Hey ${message.author.tag}! You now own ${output.balance} coins. Well done, keep going!`);
  }
  if (command === 'daily') {

    var output = await eco.Daily(message.author.id)

    if (output.updated) {

      var profile = await eco.AddToBalance(message.author.id, 100)
      message.reply(`You claimed your daily coins successfully! You now own ${profile.newbalance} coins.`);

    } else {
      message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
    }
  }
  if (command === 'resetdaily') {

    var output = await eco.ResetDaily(message.author.id)

    message.reply(output) //It will send 'Daily Reset.'

  }

  if (command === 'leaderboard') {

    if (message.mentions.users.first()) {

      var output = await eco.Leaderboard({
        filter: x => x.balance > 50,
        search: message.mentions.users.first().id
      })
      message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on the top 10 richest leaderboard!`);

    } else {

      eco.Leaderboard({
        limit: 10, //Only takes top 3 ( Totally Optional )
        filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
      }).then(async users => { //make sure it is async

        if (users[0]) var firstplace = await client.users.fetch(users[0].userid) //Searches for the user object in discord for first place
        if (users[1]) var secondplace = await client.users.fetch(users[1].userid) //Searches for the user object in discord for second place
        if (users[2]) var thirdplace = await client.users.fetch(users[2].userid)
        if (users[3]) var fourthplace = await client.users.fetch(users[3].userid)
        if (users[4]) var fifthplace = await client.users.fetch(users[4].userid)
        if (users[5]) var sixthplace = await client.users.fetch(users[5].userid)
        if (users[6]) var seventhplace = await client.users.fetch(users[6].userid)
        if (users[7]) var eighthplace = await client.users.fetch(users[7].userid)
        if (users[8]) var ninethplace = await client.users.fetch(users[8].userid)
        if (users[9]) var tenthplace = await client.users.fetch(users[9].userid)

        message.channel.send(`**Top Richest Users Of LucidBot: Well done to ${firstplace.tag} and ${secondplace.tag} for taking first and second place!** :
 
1   - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
2   - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
3   - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}
4   - ${fourthplace && fourthplace.tag || 'Nobody Yet'} : ${users[3] && users[3].balance || 'None'}
5   - ${fifthplace && fifthplace.tag || 'Nobody Yet'} : ${users[4] && users[4].balance || 'None'}
6   - ${sixthplace && sixthplace.tag || 'Nobody Yet'} : ${users[5] && users[5].balance || 'None'}
7   - ${seventhplace && seventhplace.tag || 'Nobody Yet'} : ${users[6] && users[6].balance || 'None'}
8   - ${eighthplace && eighthplace.tag || 'Nobody Yet'} : ${users[7] && users[7].balance || 'None'}
9   - ${ninethplace && ninethplace.tag || 'Nobody Yet'} : ${users[8] && users[8].balance || 'None'}
10- ${tenthplace && tenthplace.tag || 'Nobody Yet'} : ${users[9] && users[9].balance || 'None'}

**How to earn? Do -work or gamble your way up with -coinflip or -slots!** `)
      })
    }
  }
  if (command === 'transfer') {

    var user = message.mentions.users.first()
    var amount = args[1]

    if (!user) return message.reply('Reply the user you want to send money to!')
    if (!amount) return message.reply('Specify the amount you want to pay!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to transfer!')

    var transfer = await eco.Transfer(message.author.id, user.id, amount)
    message.reply(`Transfering coins successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`);
  }

  if (command === 'coinflip') {

    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble

    if (!flip || !['heads', 'tails'].includes(flip)) return message.reply('Please specify the flip, either heads or tails!')
    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
  }

  if (command === 'dice') {

    var roll = args[0] //Should be a number between 1 and 6
    var amount = args[1] //Coins to gamble

    if (!roll || ![1, 2, 3, 4, 5, 6].includes(parseInt(roll))) return message.reply('Specify the roll, it should be a number between 1-6')
    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Dice(message.author.id, roll, amount).catch(console.error)
    message.reply(`The dice rolled ${gamble.dice}. So you ${gamble.output}! New balance: ${gamble.newbalance}`)

  }

  if (command == 'delete') { //You want to make this command admin only!

    var user = message.mentions.users.first()
    if (!user) return message.reply('Please specify a user I have to delete in my database!')

    if (!message.guild.me.hasPermission(`ADMINISTRATION`)) return message.reply('You need to be admin to execute this command!')

    var output = await eco.Delete(user.id)
    if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')

    message.reply('Error: Could not find the user in database.')

  }

  if (command === 'work') {
    var output = await eco.Work(message.author.id)

    if (output.earned == 0) return message.reply('Big OOF, you did not do your job well so you earned nothing!')
    message.channel.send(`${message.author.username}
Nice! You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
Nice! You now own :money_with_wings: ${output.balance}`)
    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 500),
      jobs: ['cashier', 'shopkeeper', 'epicgamer', 'cosplayer', 'Discord Bot Developer', 'Actor']
    })

    if (output.earned == 0) return message.reply('Unlucky, CEO said you FAILED your job so you earned nothing!')

    message.channel.send(`${message.author.username}
Nice! You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
Nice! You now own :money_with_wings: ${output.balance}`)
  }

  if (command === 'slots') {
    var amount = args[0]

    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Slots(message.author.id, amount, {
      width: 3,
      height: 1
    }).catch(console.error)
    message.channel.send(gamble.grid)
    message.reply(`You ${gamble.output}! New balance: ${gamble.newbalance}`)
  }
});
const { DiscordBattleShip } = require("discord-battleship");

const BattleShip = new DiscordBattleShip({
  embedColor: "RED",
  prefix: '-',

});

client.on("message", async (message) => {
  if (message.content.toLowerCase().includes("-battleship"))
    await BattleShip.createGame(message);
});
client.on("message", async (message) => {
  if (message.content.toLowerCase().includes("-battleship"))
    await BattleShip.createGame(message);
});



client.login(process.env.DISCORD_TOKEN);



