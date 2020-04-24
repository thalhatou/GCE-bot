const   Telegraf = require('telegraf');
const bot = new Telegraf('token key here');

const helpMessage = `
GCE ADVANCED LEVEL SCIENCE PAST GCE QUESTIONS BASED ON SUBJECT:
 1:COMPUTER SCIENCE A/L PAST GCE QUESTIONS
/CSCjune2019p1
/CSCjune2019p2
/CSCjune2018p1
/CSCjune2018p2
/CSCjune2017p1
/CSCjune2017p2
/CSCjune2016p1
/CSCjune2016p2
/CSCjune2015p1
/CSCjune2015p2
2:ICT(0796) A/L PAST GCE QUESTIONS
/ictjune2019p1
/ictjune2019p2
/ictjune2018p1
/ictjune2018p2
/ictjune2017p1
/ictjune2017p2
/ictjune2016p1
/ictjune2016p2
/ictjune2015p1
/ictjune2015p2
3:PHYSICS A/L PAST GCE QUESTIONS
 /physics2019p1
 /physics2019p2
 /physics2018p1
 /physics2018p2
 /physics2017p1
 /physics2017p2
 /physics2016p1
 /physics2016p2
 /physics2015p1
 /physics2015p2
4:BIOLOGY A/L PAST GCE QUESTIONS
 /bio2019p1
 /bio2019p2
 /bio2018p1
 /bio2018p2
 /bio2017p1
 /bio2017p2
 /bio2016p1
 /bio2016p2
 /bio2015p1
 /bio2015p2
5:CHEMISTRY A/L PAST GCE QUESTIONS
 /chem2019p1
 /chem2019p2
 /chem2018p1
 /chem2018p2
 /chem2017p1
 /chem2017p2
 /chem2016p1
 /chem2016p2
 /chem2015p1
 /chem2015p2
4:PURE MATHEMATICS A/L PAST GCE QUESTIONS
 /pm2019p1
 /pm2019p2
 /pm2018p1
 /pm2018p2
 /pm2017p1
 /pm2017p2
 /pm2016p1
 /pm2016p2
 /pm2015p1
 /pm2015p2
6:FURTHER MATHEMATICS A/L PAST GCE QUESTIONS
 /pmm2019p1
 /pmm2019p2
 /pmm2018p1
 /pmm2018p2
 /pmm2017p1
 /pmm2017p2
 /pmm2016p1
 /pmm2016p2
 /pmm2015p1
 /pmm2015p2

`;

bot.start((ctx)=>{
  ctx.reply("Hi i am Gfriend Bot");
  ctx.reply(helpMessage);
})
bot.help((ctx)=>{
    ctx.reply(helpMessage);
})



bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears(['hi','HI','Hi', 'hello','Hello','gce','HELLO'], (ctx) => ctx.reply('Hey there happy to see you here click on /start for Past GCE and mock questions ,Revision notes etc all in your inbox for free'))

bot.command('Buider', ctx => {
 bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
   //file path
   bot.telegram.sendPhoto(ctx.chat.id, 
    {
        source: "res/Yahya.png"
},
 {
    reply_to_message_id: ctx.message.message_id
 }
 );
    //using url
  //  bot.telegram.sendPhoto(ctx.chat.id, "https://unsplash.com/photos/40EZGrutbTg");
})


bot.command('dubai', ctx => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_video");
  bot.telegram.sendPhoto(ctx.chat.id, "https://unsplash.com/photos/pVnViWUWE9A",
 {
    reply_to_message_id: ctx.message.message_id
 }
 )
})
bot.command(['ict','ICT','Ict' ,'796','0796','Ictjune2019p2','ictjune2019p2','ictjune2018p1'] , ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_document");
    bot.telegram.sendDocument(ctx.chat.id,{
        source: "res/ictjune2019p2.pdf"
    },{
      reply_to_message_id: ctx.message.message_id
   },{
    thumb: {source: "res/GCE.jpg"}
   });
})

bot.launch();
