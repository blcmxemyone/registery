const Discord = require("discord.js")
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))
  if(message.channel.id !== "824697908003209227") return message.channel.send("Bu komutu sadece <#824697908003209227> kanalında kullanabilirsin!")
    const etiketlenenKişi = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!etiketlenenKişi) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Kayıtsıza atmak için bir kişi etiketlemelisin!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

if(message.member.roles.highest.position <= etiketlenenKişi.roles.highest.position) return message.channel.send(`${client.emojis.cache.get(ayarlar.no)} **Senden üstte/aynı pozisyonda bir kişiyi kayıtsıza atamazsın!**`).then(message.react(client.emojis.cache.get(ayarlar.no)))

const mattheEmbed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setFooter(ayarlar.footer)
.setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
.setTimestamp()

etiketlenenKişi.roles.set([ayarlar.kayıtsızRol])
etiketlenenKişi.setNickname(`${ayarlar.tag} İsim ${ayarlar.sembol} Yaş`)

message.react(client.emojis.cache.get(ayarlar.yes))

message.channel.send(mattheEmbed.setDescription(`Kullanıcı başarıyla kayıtsıza (<@&${ayarlar.kayıtsızRol}>) atıldı!`))//Youtube Matthe

}
exports.config = {
    name: "kayıtsız",
    guildOnly: true,
    aliases: ["unregistered", "kayitsiz", "unreg", "unregister","ks"]
}