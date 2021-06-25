module.exports = {
    name: 'die' ,
    description: "commits self die ", 
    execute(message, args){
      message.channel.send("We ain't ready for you to leave this world yet." )
      message.author.send("https://www.nhs.uk/conditions/suicide/", "https://disboard.org/servers/tag/suicide")

      
    }          
}  

