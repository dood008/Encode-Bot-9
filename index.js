const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField,
  ButtonBuilder,
  ButtonStyle,
  userMention,
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ModalSubmitInteraction,
  permissionOverwrites, Permissions
} = require("discord.js");

const client = new Client({
intents: 131071,
});



const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});




const prefix = ";"; // البريفكس

client.on("ready", () => {
    console.log(`🤖 - Logged in as ${client.user.tag}!`);
    console.log(`✅ - index.js`);
    client.user.setActivity(`I'm in : \` ${client.guilds.cache.size} \` Server 〢 by Stal`, { type: 3 });
    client.user.setStatus("idle");

    // تحديث النشاط كل 1 دقائق
    setInterval(() => {
        client.user.setActivity(`I'm in : \` ${client.guilds.cache.size} \` Server 〢 by Stal`, { type: 3 });
    }, 1 * 60 * 1000); // تحديث كل 10 دقائق
});




const owner = "714200387048964107"; // ايدي الاونر
const wordReplacements = {
'حساب': '7ســـاب',
'نيترو': 'نيتر9',
'ديسكورد': 'ديسك9رد',
'شوب': 'ش9ب',
'بروجكت': 'بر9جكت',
'ستور': 'ست9ر',
'بوت': 'ب9ت',
'توكن': "ت9كن",
'توكنات': "ت9كنات",
'بروجكت': "بر9جكت",
'بروجكتات': 'بر9جكتات',
"سعر": 'س3ر',
"متوفر": "مت9فر",
"شراء": "شر|ء",
"اشتري": "اشtري",
"للبيع": "للبي3",
"ابيعه": "ابي3ه",
"ينباع": "ينبا3",
"اشتريه": "اشtريه",
"سيرفر": "سيrفر",
"سيرفرات": "سيrفرات",
"بوست": "ل9ست",
"بوستات": "ب9ستات",
"نيتروهات": "نيتر9هات",
"اسعار": "اس3ار",
"دفع": "دف3",
"شاهد": "شاhد",
"نتفلكس": "نtفليكس",
"ستيم": "ستيm",
"test": "test!",
   "دسكورد": "دىىــــىـ√ــورد",
"بيع": "بيـ3",
"Account": "acc",
"كريديت": "كريـ ـــديــt",
"منشور": "منـشــ9ر",
"منشورك": "منشــ9رك",
"منشوراتك": "منشــ9راىـtــك",
"منشورات": "منشــ9رات",
"بضريبة": "بضــr يبة"




};
client.on("messageCreate", (message) => {
  if (message.content === prefix + "setup") {   
  /* 
 if (message.author.id !== owner) return message.delete();
  

const roleWithPermission = message.member.roles.cache.some(role => role.permissions.has("Administrator"));
if (!roleWithPermission) return;   
   */
    
    
    if (message.author.id !== owner && !message.member.roles.cache.some(role => role.permissions.has("ADMINISTRATOR"))) {
    return message.delete();
    }
    
    
    
    const embed = new EmbedBuilder()
        .setTitle('قـسـم التـشـفـيـر')
        .setColor('#43C6DB')
        .setDescription(`مرحبًا بك في قسم التشفير السريع  \n\n لسيرفر \` ${message.guild.name} \` لتشفير منشوراتك`)
        .addFields(
          
          
          { name: 'خطوة ** __1__**', value: '**لتشفير منشورك، ما عليك سوى الضغط على زر `شفر 📇` ووضع المنشور داخله، **' },
         
          
          {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
          
          
       { name: 'خطوة **__2__**', value: '**- بمجرد تشفير المنشور، قم بنسخ النص الذي تمت عملية التشفير عليه.\n1. - بعد ذلك، انتظر استلام رسالة خاصة تحتوي على النص المشفر.\n2. - قم بنسخ النص المشفر من الرسالة الخاصة واستخدمه كما تشاء.**' },
               
        
          {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
          
        )
    
        .setThumbnail('https://cdn.discordapp.com/attachments/1218476292287102976/1218517230397030400/6cb2d478a73c5f73.jpg?ex=6607f39a&is=65f57e9a&hm=71521eefc182527675fd73a2d2fe1da0c8abe38466db47fd4846eab677582123&')
        .setImage('https://cdn.discordapp.com/attachments/1218476292287102976/1218518477799686164/dc467c11c5c59961.jpg?ex=6607f4c4&is=65f57fc4&hm=2a413b2e21234a0083365b9ad4829a31999c30f7e0ed5afa374e1bf687b7ebb7&')

  const text = `@everyone` 
    
    
      const btn = new ButtonBuilder()
        .setCustomId('tshfir')
        .setStyle(ButtonStyle.Primary)
        .setLabel('شـفـر')
        .setEmoji('📇');

      const button = new ButtonBuilder()
        .setLabel('الدعم الفني')
        .setURL('https://discord.com/invite/mz9958yCq9')
        .setStyle(ButtonStyle.Link)
        .setEmoji('1213821113356918794');

      const row = new ActionRowBuilder()
        .addComponents(btn, button);

      message.delete();
    message.channel.send({ content: text, embeds: [embed], components: [row] });
  }
  }
);

 


    
client.on("interactionCreate", (interaction) => {
  if (interaction.customId == "tshfir") {
    const modal = new ModalBuilder()
      .setTitle('تشفير منشور')
      .setCustomId('tshfirmodal');
    const inp = new TextInputBuilder()
      .setLabel('منشورك')
      .setPlaceholder('ضع منشورك هنا')
      .setCustomId('inp1')
      .setStyle(TextInputStyle.Paragraph)
      .setMaxLength(2000);
    const row = new ActionRowBuilder().addComponents(inp)
    modal.addComponents(row)
    interaction.showModal(modal)
  } else if (interaction.customId == "tshfirmodal") {
    const btn = new ButtonBuilder()
      .setCustomId('copytxt')
      .setLabel('انسخ نص')
      .setStyle(ButtonStyle.Primary)
      .setEmoji('📋');
    const row = new ActionRowBuilder().addComponents(btn);
    const v = interaction.fields.getTextInputValue('inp1');
    let modifiedContent = v;
    for (const word in wordReplacements) {
      if    (wordReplacements.hasOwnProperty(word)) {
        const replacement = wordReplacements[word];
        modifiedContent = modifiedContent.replace(new RegExp(word, 'gi'), replacement);
      }
    }
    interaction.reply({ content: `${modifiedContent}`, components: [row], ephemeral: true })
  } else if (interaction.customId == "copytxt") {
    const msgc = interaction.message.content;
    interaction.user.send(`__**منشورك بعد التشفير :**__\n ${msgc}`).then(() => { interaction.reply({ content: 'تم ارسال المنشور الى خاصك انسخه من هناك', ephemeral: true }) }).catch(() => interaction.reply({ content: 'عذرا خاصك مغلق', ephemeral: true }))
  
    
  }
    
});
  

client.on("messageCreate", message2 => {
    if (message2.content.toLowerCase() === prefix + "help") {
        const helpEmbed = new EmbedBuilder()
            .setColor(0xFF0000)
            .setTitle('قائمة الأوامر والبرفكس')
            .setAuthor({
                name: 'بوت إعلاناتك المشفرة',
                iconURL: 'https://cdn.discordapp.com/attachments/1133349725446352976/1218325561987043348/img_20242821393.png?ex=66074119&is=65f4cc19&hm=57343d22da00d8215dbcba39a8de2d1d54872d2ba785197a3ec4c51356ed6850&'
            })
            .setDescription('مرحبًا بك في قائمة الأوامر لبوت إعلاناتك المشفرة.')
            .setThumbnail('https://cdn.discordapp.com/attachments/1133349725446352976/1218325561987043348/img_20242821393.png?ex=66074119&is=65f4cc19&hm=57343d22da00d8215dbcba39a8de2d1d54872d2ba785197a3ec4c51356ed6850&')
            .addFields(
               
              {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
              
              {
    name: '\` ما هي بادئة أو برفكس البوت ؟ \`',
   
                value: `برفكس البوت هو  \` '   ${prefix}   ' \`  وهي التي تبدأ بالأمر مثلاً    \`;help\``,
},
                {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
                {
                    name: '\` الأمر setup \`',
                    value: 'يستخدم لإضافة بانل أو رسالة تشفير منشورات. يتطلب صلاحية `Administrator`.',
                    inline: true
                },
                
              {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
              
              {
                    name: '\` الأمر help \`',
                    value: 'يستخدم لعرض قائمة المساعدة ومعلومات عن البوت.',
                    inline: true
                },
                
              {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
              
              {
                    name: '\` من صانع البوت ؟ \`',
                     value: 'صانع البوت و ملكيته \n لـــــ<@!714200387048964107> .',
                            inline: true
                },
                
              
              {
                 name: '\u200b',
                    value: '\u200b',
                    inline: false
                },
              
              {
                    name: '\` ملاحظات مهمه \`',
                    value: ` في حال وجت خلل في بوت توجه إلى الدعم الفني \n\n اذا لديك اقتراحات لتطوير البوت توجه إلى سيرفر الدعم الفني \n 
[ الدعم الفني](https://discord.com/invite/mz9958yCq9) 📡   🛠️ `,
                    inline: false
                }
            )
            .setImage('https://cdn.discordapp.com/attachments/1133349725446352976/1218325256662679685/dabe3ef552e0da16.jpg?ex=660740d0&is=65f4cbd0&hm=36a1be5f99e87057e4683bfb4bd7a55c234606ff18cd8ed48effc227594588d4&')
            .setTimestamp()
.setFooter({
    text: 'help cmd   |   قائمه المساعدة     .',
    iconURL: 'https://cdn.discordapp.com/attachments/1133349725446352976/1218325561987043348/img_20242821393.png?ex=66074119&is=65f4cc19&hm=57343d22da00d8215dbcba39a8de2d1d54872d2ba785197a3ec4c51356ed6850&'
});
        const inviteButton = new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel(`دعوة البوت`)
            .setEmoji('1213820945089830972')
            .setURL('https://discord.com/oauth2/authorize?client_id=1215743542308376636&permissions=8&scope=bot+applications.commands');

        const supportButton = new ButtonBuilder()
            .setStyle(ButtonStyle.Link)
            .setLabel(`الدعم الفني`)
            .setEmoji('1213821113356918794')
            .setURL('https://discord.com/invite/mz9958yCq9');

        const row = new ActionRowBuilder()
            .addComponents(inviteButton, supportButton);

        message2.react("<:p_verified:1213821123951857734>");
        // بعت رسالة للشب
        message2.member.send({ embeds: [helpEmbed], components: [row] })
            .catch(error => {
                console.error("ما قدرت أبعت رسالة المساعدة:", error);
                message2.channel.send("ما قدرت أبعت رسالة المساعدة عالخاص. تأكد من فتح الرسائل الخاصة.");
            });
    }
});
  

///////-----by-Stal-----///////

client.login(process.env.token); 
