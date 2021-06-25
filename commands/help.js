module.exports = {
    name: 'help',
    description: "this is for informing users on what commands are available",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#00F0FF') 
        .setTitle('Need help using LucidBot? Refer to these commands and click on this message to invite!')
        .setURL('https://discord.com/oauth2/authorize?client_id=784889587381698611&scope=bot&permissions=2147483647.')
        .setDescription ('Stated below are all the commands for help')
        .addFields(
            {name: 'Welcome', value: 'Thanks For Adding me! Ps: If you see the creator of this bot trying commands that are different to the ones stated below, do not try to test them yourself as it may inadvertently crash me. Thanks!'},
            {name: 'Prefix', value: 'The prefix for LucidBot is -'},
            {name: 'Command 1 ', value: 'ping'},
            {name: 'Command 2', value: 'pong'},
            {name: 'Command 3', value:'rankup' },
            {name: 'Command 4', value:'trading rules(for my own rocket league server)'},
            {name: 'Command 5', value:'rules' },
            {name: 'Command 6(for youtubers)', value:'lethamyr, cbell, sunlesskhan, mertzy, musty, jonsandman, fluump, modaxile, modandreas, prabz' },
            {name: 'Command 7', value:'help' },
            {name: 'Command 8', value:'play (for music streaming)' },
            {name: 'Command 9', value:'leave (for music streaming)' },
            {name: 'Command 10', value:'rules ' },
            {name: 'Command 11', value:'hate (if you have the need to be a bit toxic)' },
            {name: 'Command 12', value:'meme' },
            {name: 'Command 13', value:'work (economy)' },
            {name: 'Command 14', value:'slots (economy)' },
            {name: 'Command 15', value:'transfer {ping of recipient goes here e.g LucidBot} {value you wanna give} (economy)' },
            {name: 'Command 16', value:'daily (economy)' },
            {name: 'Command 17', value:'bal (economy)' },
            {name: 'Command 18', value:'resetdaily (economy)' },
            {name: 'Command 19', value:'coinflip {true/false} {value of money you wanna put for the gamble} (economy)' },
            {name: 'Command 20', value:'leaderboard {@ExampleBot#0001 (optional to ping) } (economy)' },
            {name: 'Command 21', value:'simp' },
            {name: 'Command 22', value:'battleship {ping for player you wanna battle goes here}' },
            {name: 'Command 23', value:"avatar {optional ping to find another person's avatar goes here otherwise it will default to displaying the message sender'avatar if there is no ping.'" },
            {name: 'Command 24', value:'suggest {your suggestion goes here}' },
            {name: 'Command 25', value:'announcement' },
            {name: 'Command 26', value:'die' },
            {name: 'Command 27', value:'admincoms' },
            {name: 'Command 28', value:'ttt(a tictactoe game against AI)' },
            {name: 'Note', value:'You can only bulk delete 80 messages, or less and have to be under **14 days** old. Additionally, if you want to use my suggestion command, ensure you have a channel labelled #suggestions.' },
        )
        .setImage('https://contenthub-static.grammarly.com/blog/wp-content/uploads/2018/05/how-to-ask-for-help-760x400.jpg')
        .setFooter('More Commands May Pop Up above. These are the commands available to EVERYONE however other commands will still be restricted to Mods. P.s: You will need a a role name "Member"(a default role everyone gets) and a "Mute " role if you wanna use unmute and mute!');
        message.author.send(newEmbed);
        message.channel.send('Check your DMs!')
    }
  
    
}
