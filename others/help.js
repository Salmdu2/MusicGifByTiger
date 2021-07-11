const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**MoonBot Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://media.discordapp.net/attachments/794700880875749396/863890086278070282/standard.gif`)
    .setTitle(`**MoonBot Help**`)
    .setDescription(`

<a:dark:813714900777959444> | **Music Commands**
> \`play\` ・ \`skip\` ・ \`skipto\`
> \`stop\` ・ \`volume\` ・ \`nowplaying\`
> \`shuffle\` ・ \`search\` ・ \`resume\`
> \`remove\` ・ \`queue\` ・ \`filter\`
> \`loop\` ・ \`lyrics\` ・ \`radio\`

<:emoji_61:827114330608107531> | **Gif Commands**
> \`boy\` ・ \`girl\` 


 | Links
[SUPPORT](https://discord.gg/DDtRN4qK63)    -    [INVITE](https://discord.com/oauth2/authorize?client_id=807289119193432125&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("RANDOM");
   message.react("<:emoji_4:815583574983966720>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
