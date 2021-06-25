module.exports = {
    name: 'purge' ,
    description: "this is for purge messages!", 
    async execute(message, args){          
        if(!args[0]) return message.reply("Please enter the amount of messages you want to clear. Thanks!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!");

        if(args[0] > 80) return message.reply("Hey, you can't delete more than a 80 messages.");
        if(args[0] < 1) return message.reply("Bruhhh, trying to delete less than 1 message?!? Now thats just dumb ngl.");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages) 
        });
            
    
    }
}