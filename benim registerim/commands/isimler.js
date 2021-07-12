const Discord = require("discord.js")
const db = require("quick.db")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
  if(message.channel.id !== "824697908003209227") return message.channel.send("Bu komutu sadece <#824697908003209227> kanalında kullanabilirsin!")
    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author

const mattheEmbed = new Discord.MessageEmbed()
.setColor("2f3136")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

let isimler = db.get(`isimler.${etiketlenenKişi.id}`) || [];
isimler = isimler.reverse()
let isimler2 = isimler.length > 0 ? isimler.map((value) => `${ayarlar.tag} ${value.İsim} ${ayarlar.sembol} ${value.Yaş}  ( <@!${value.Yetkili}> )`).join("\n") : `${client.emojis.cache.get(ayarlar.no)} ${etiketlenenKişi} kullanıcısına ait isim bulunamadı!`

message.react(client.emojis.cache.get(ayarlar.yes))

message.channel.send(mattheEmbed.setDescription(`
${client.emojis.cache.get(ayarlar.yes)} ${etiketlenenKişi} kullanıcısına ait isimler:

${isimler2}
`))

}
exports.config = {
    name: "isimler",
    guildOnly: true,
    aliases: ["names", "nicknames"]
}