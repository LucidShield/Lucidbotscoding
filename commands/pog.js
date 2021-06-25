module.exports = {
    name: 'pog',
    description: "This releases a pog into the guild",
    execute(message, args){
        message.channel.send({
            files: ['./Downloads/pogchamp.jpg']
        });
    }
}
