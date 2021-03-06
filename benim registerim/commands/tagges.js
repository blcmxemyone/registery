const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!ayarlar.yetkiliRol.some(mattheee => message.member.roles.cache.has(mattheee)) && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
  if(message.channel.id !== "824697908003209227") return message.channel.send("Bu komutu sadece <#824697908003209227> kanalında kullanabilirsin!")
    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Tag rolü vermek için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const mattheEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

if(etiketlenenKişi.roles.cache.has(ayarlar.tagRol)) return message.channel.send(mattheEmbed.setDescription(`Kullanıcıdan başarıyla taglı <@&${ayarlar.tagRol}> rolü alındı!`)).then(etiketlenenKişi.roles.remove(ayarlar.tagRol))

etiketlenenKişi.roles.add(ayarlar.tagRol)

message.react(client.emojis.cache.get(ayarlar.yes))

message.channel.send(mattheEmbed.setDescription(`Kullanıcıya başarıyla taglı <@&${ayarlar.tagRol}> rolü verildi!`))

}
exports.config = {
    name: "taglı",
    guildOnly: true,
    aliases: ["tagrol", "taglırol", "taglirol"]
}