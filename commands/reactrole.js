module.exports =  {
    name: 'reactrole',
    description: 'Creates a reactionrole',
    async execute(message, args, Discord, client ){
        const channel = 'get-roles';
        const tourneypingRole = message.guild.roles.cache.find(role => role.name === '818440810562977804')
        
        const tourneypingRoleEmoji = '🌌';

        const embed = new Discord.MessageEmbed()
        .setColor('#42adf5')
        .setTitle('If you want to get a ping for the next available tourney react here!')
        .setDescription('You will be granted access to a few new channels only available to tourneyping members!\n\n '
            + `${tourneypingRoleEmoji}\n`)


            let messageEmbed = await message.channel.send(embed)
            messageEmbed.react(tourneypingRoleEmoji);

            client.on('messageReactionAdd', async (reaction, user) => {
                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
                if (user.bot) return;
                if (!reaction.message.guild) return;    

                if (reaction.message.channel.id == channel) {
                    if (reaction.emoji.name === tourneypingRoleEmoji) {
                        await reaction.message.guild.members.cache.get(user.id).roles.add(tourneypingRole);

                    }
                }else{
                    return;
                }
                }); 
            }
}