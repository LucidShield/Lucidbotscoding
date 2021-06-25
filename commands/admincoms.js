module.exports = {
    name: 'admincoms',
    description: "gives all the admin commands",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#3C92B7')
        .setTitle('Admin Commands')
        .setURL('https://www.youtube.com/channel/UCKRHIDFbE0xe40YOEFjXCug')
        .setDescription ('These are the admin commands. If you are found to use these in a server and are not an admin or moderator of that server then it is at the server owners/ real moderators discretion to punish you.')
        .addFields(
            {name: 'purge', value:'mass deletes messages'},
            {name: 'kick', value: 'kicks people'},
            {name:'ban', value: 'bans people'},
            {name:'mute', value:'mutes people can also do a timed mute :"mute 10s"= mute for 10 seconds'}
        )
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5xkZyUUMlaE7pGyAoVmT18BUv17aaw5lYCQ&usqp=CAU')
        .setFooter('Ensure that to use the mute command you have a default role called "Server Members" and "Muted" for the role reassignment. ');
        message.channel.send(newEmbed);
    }
}
