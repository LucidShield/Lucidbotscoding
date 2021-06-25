module.exports = {
    name: 'suggest', 
    description: 'This is for guild members to be able to state a suggestion and for the guild tor eact with their approval/disapproval.',
    execute(message, args, client, Discord ){
        const channel = message.guild.channels.cache.find(c => c.name === 'suggestions')
        if(!channel) return message.channel.send('Suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('FADF2E')
        .setTitle('Hey everyone, a new community suggestion!')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic:true  }))
        .setDescription(messageArgs);
        
        message.channel.send(embed).then((msg)=>{
            msg.react('👍');
            msg.react('👎');
            message.delete();

        }).catch((err)=>{
            throw err;
        });
        
    }
    
}