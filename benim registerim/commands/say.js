const Discord = require("discord.js");
exports.run= async (client, message, args) => {       

let Tag = "☬" //
let Etiket = "3131" //

   let TotalMember = message.guild.memberCount
          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          let Etiketiniz = message.guild.members.cache.filter(u => u.user.discriminator.includes(Etiket)).size;
          let toplamTag = Etiketiniz + Taglı
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;

message.channel.send(new Discord.MessageEmbed().setDescription(`
\<a:dark_tikk:856142689032601620>\ Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
\<a:dark_tikk:856142689032601620>\ Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
\<a:dark_tikk:856142689032601620>\ Toplam **${Taglı}** kişi \☬\  tagımızda bulunuyor.
\<a:dark_tikk:856142689032601620>\ Toplam **${Etiketiniz}** kişi \`${Etiket}\` tagımızda bulunuyor.
\<a:dark_tikk:856142689032601620>\ Seste **${Voice}** kullanıcı bulunmaktadır.
\<a:dark_tikk:856142689032601620>\ Sunucuya toplam **${Boost}** takviye yapılmıştır.
`))



}
exports.config = {
    name: "say",
    guildOnly: true,
    aliases: ["say"]
}