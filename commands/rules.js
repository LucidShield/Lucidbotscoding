module.exports = {
    name: 'rules',
    description: "creating the rules with embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#3C92B7')
        .setTitle('Rules Of The Rendezvous')
        .setURL('https://www.youtube.com/channel/UCKRHIDFbE0xe40YOEFjXCug')
        .setDescription ('These are the GENERAL rules. We expect you to follow them and if there is a breach of these at least twice, you will be banned.')
        .addFields(
            {name: 'Rule 1 ', value: 'No prejudice at all-this includes being homophobic and being ableist as well, and other forms of prejudicial treatment of others.'},
            {name: 'Rule 2', value: 'Offensive clubs promoted here will end in the sender being banned'},
            {name: 'Rule 3', value:'Listen to Staff' },
            {name: 'Rule 4', value:'Dont be toxic' },
            {name: 'Rule 5', value:'Talk in relevant sections' },
            {name: 'Rule 6', value:'No offensive nicknames' },
            {name: 'Rule 7', value:'Any other promotion here is severely prohibited' },
            {name: 'Rule 8', value:'No NSFW.' }
        )
        .setImage('https://assets.change.org/photos/5/vv/xk/JQvvXKtpTYviHRP-800x450-noPad.jpg?1601644621')
        .setFooter('The Trading Rules Will Be Below.');
         
       
        message.channel.send(newEmbed);
    }
  
    
}
