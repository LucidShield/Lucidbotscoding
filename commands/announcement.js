module.exports={
    name: 'announcement',
    description: 'Guild members can find out the latest improvements and bug fixes to LucidBot!',
    execute(message, args, Discord ){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#DF0000')
        .setTitle("What's new!")
        .setURL(`https://discord.com/oauth2/authorize?client_id=784889587381698611&scope=bot&permissions=8`)
        .setDescription('Here are the announcement logs:')
        .addFields(
            {name: '17/2/21', value: 'Completed the suggestions command can be completed with -suggest. Working on advanced features for the music aspect of the bot.'},
            {name: '19/2/21', value: 'Advanced msuic aspects finished! Chilling coz its my b-day. Pog!'},
            {name: '4/3/21', value: 'Tictactoe game done!'}
        )
        .setImage('https://i.pinimg.com/736x/0f/a6/ce/0fa6ce6780ce9d0432f73d61ac8abe7a.jpg')
        .setFooter("Running on 23 servers right now. Pog.")

        message.channel.send(newEmbed)
        
        
    }
}