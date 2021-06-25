module.exports = {
    name: 'invite' ,
    description: "Provides the LucidBot invite.", 
    execute(message, args){
            message.channel.send('Wanted the invite? Here it is! https://discord.com/oauth2/authorize?client_id=784889587381698611&scope=bot&permissions=2147483647.')

    }          
}  