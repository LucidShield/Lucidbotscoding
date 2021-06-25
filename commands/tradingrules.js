module.exports = {
    name: 'tradingrules',
    description: "creating the tradingrules with embeds",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#B61C00')
        .setTitle('Trading Rules Of The Rendezvous')
        .setURL('https://www.youtube.com/channel/UCKRHIDFbE0xe40YOEFjXCug')
        .setDescription ('These are the TRADING rules. We expect you to follow them and if there is a breach of these at least twice, you will be banned.')
        .addFields(
            {name: 'Rule 1 ', value: 'Always check a players id before trading with others by using the "!verify" command'},
            {name: 'Rule 2', value: 'Be aware of what you are trading:check the value of your item(s) on pricing websites such as RL Insider. Painted and certified items usually cost more than their non-painted and certified counterpart, so watch out for that.'},
            {name: 'Rule 3', value:'Think to yourself: Is this trade too good to be true? If you feel the trade is too good to be true, meaning the item(s) you are buying are expensive but you are paying significantly less, its most likely a scam. Please be careful and take precaution.' },
            {name: 'Rule 4', value:'Never click a link you dont trust. Nowadays a scammer will typically send you a sketchy link that is a copy of Steam. ALWAYS check for the green padlock in your browser. If the link is fake, report and immediately block them.'},
            {name: 'Rule 5', value:'Head to the vc- trading arrangement channel to make the trade with another. ' },
            {name: 'Rule 6', value:'Do not try to beg someone to give you something, it is unfair if you have something they do not want!' }
        )
        .setImage('https://www.rocketleaguefans.com/uploads/ueditor/image/20190528/1559025299921727.jpeg')
        .setFooter('More Rules May Pop Up Below.');
         
       
        message.channel.send(newEmbed);
    }
  
    
}
