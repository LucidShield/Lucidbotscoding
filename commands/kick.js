module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id); 
            memberTarget.kick();
            message.author.send(`You were successful in kicking ${memberTarget} !`)
        } else {
            message.channel.send(`Oof, you couldn't kick that member!`);
        }
    }
} 