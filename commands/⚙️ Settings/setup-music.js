var {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton,
  MessageActionRow,
  MessageSelectMenu
} = require('discord.js')
module.exports = {
  name: "setup-music",
  category: "⚙️ Settings",
  aliases: ["setupmusic"],
  cooldown: 10,
  usage: "setup-music #Channel",
  description: "Setup a Music Request Channel",
  memberpermissions: ["ADMINISTRATOR"],
  type: "music",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //first declare all embeds
    var embeds = [
      new MessageEmbed()
      .setColor(es.color)
      .setImage("https://cdn.discordapp.com/attachments/922681442885054565/923779835640291338/HYPEABIS_PIONEER_BANNER.png?size=4096"),
      new MessageEmbed()
      .setColor(es.color)
      .setFooter(es.footertext, message.guild.iconURL({
        dynamic: true
      }))
      .setImage(message.guild.banner ? message.guild.bannerURL({
        size: 4096
      }) : "https://cdn.discordapp.com/attachments/922681442885054565/923779835367673876/hypeabis_pioneer_background.png?size=4096")
      .setDescription(`**__HOW TO USE THE BOT:__**\nType your favorite song title with the artist name or simply by copy-paste the song/video URL on the text box\n\n**__CARA MENGGUNAKAN BOT:__**\nKetik judul lagu beserta nama penyanyi/band favorit mu lalu send, atau dengan copy-paste URL musik/video di kolom text.`)
    ]
//     var Emojis = [
//       "0️⃣",
//       "1️⃣",
//       "2️⃣",
//       "3️⃣",
//       "4️⃣",
//       "5️⃣",
//       "6️⃣",
//       "7️⃣",
//       "8️⃣",
//       "9️⃣",
//       "🔟",
//       "🟥",
//       "🟧",
//       "🟨",
//       "🟩",
//       "🟦",
//       "🟪",
//       "🟫",
//     ]
    //now we add the components!
    var components = [
//       new MessageActionRow().addComponents([
//         new MessageSelectMenu()
//         .setCustomId("MessageSelectMenu")
//         .addOptions(["Pop", "Strange-Fruits", "Gaming", "Chill", "Rock", "Jazz", "Blues", "Metal", "Magic-Release", "NCS | No Copyright Music", "Default"].map((t, index) => {
//           return {
//             label: t.substr(0, 25),
//             value: t.substr(0, 25),
//             description: `Load a Music-Playlist: "${t}"`.substr(0, 50),
//             emoji: Emojis[index]
//           }
//         }))
//       ]),
      new MessageActionRow().addComponents([
        new MessageButton().setStyle('PRIMARY').setCustomId('Skip').setEmoji(`⏭`).setLabel(`Skip`).setDisabled(),
        new MessageButton().setStyle('DANGER').setCustomId('Stop').setEmoji(`⏹`).setLabel(`Stop`).setDisabled(),
        new MessageButton().setStyle('SECONDARY').setCustomId('Pause').setEmoji('⏸').setLabel(`Pause`).setDisabled(),
        new MessageButton().setStyle('SUCCESS').setCustomId('Autoplay').setEmoji('🔁').setLabel(`Autoplay`).setDisabled(),
        new MessageButton().setStyle('PRIMARY').setCustomId('Shuffle').setEmoji('🔀').setLabel(`Shuffle`).setDisabled(),
      ]),
      new MessageActionRow().addComponents([
        new MessageButton().setStyle('SUCCESS').setCustomId('Song').setEmoji(`🔁`).setLabel(`Song`).setDisabled(),
        new MessageButton().setStyle('SUCCESS').setCustomId('Queue').setEmoji(`🔂`).setLabel(`Queue`).setDisabled(),
        new MessageButton().setStyle('PRIMARY').setCustomId('Forward').setEmoji('⏩').setLabel(`+10 Sec`).setDisabled(),
        new MessageButton().setStyle('PRIMARY').setCustomId('Rewind').setEmoji('⏪').setLabel(`-10 Sec`).setDisabled(),
        new MessageButton().setStyle('PRIMARY').setCustomId('Lyrics').setEmoji('📝').setLabel(`Lyrics`).setDisabled(),
      ]),
    ]
    let channel = message.mentions.channels.first();
    if (!channel) return message.reply(":x: **You forgot to ping a Text-Channel!**")
    //send the data in the channel
    channel.send({
      embeds,
      components
    }).then(msg => {
      client.musicsettings.set(message.guild.id, channel.id, "channel");
      client.musicsettings.set(message.guild.id, msg.id, "message");
      //send a success message
      return message.reply(`✅ **Successfully setupped the Music System in:** <#${channel.id}>`)
    });
  },
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://milrato.dev
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
