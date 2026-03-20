/*CMD
  command: /show_welcome_direct
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /show_welcome_direct
*/

var uid = user.telegramid;

// Premium Emoji တွေနဲ့ ပိုပြီး ညို့အားပြင်းသွားအောင် ပြင်ထားတယ်နော် ကိုကို 🫦💦
let welcome_text = 
  "<tg-emoji emoji-id='5318831913982402120'>🫦</tg-emoji> <b>အထန်မလေးများရဲ့ ကာမဘုံ</b> <tg-emoji emoji-id='5341490264055753835'>🍑</tg-emoji>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "💭 <i>မောင်လေး... မမတို့ရဲ့ စိုစိုအိအိ အလှတရားတွေကို အပီအပြင် ခံစားဖို့ အဆင်သင့်ပဲလားဟင်?</i>\n\n" +
  "<blockquote><tg-emoji emoji-id='5319128549648411604'>💦</tg-emoji> <b>စိတ်ကြိုက် နှိုက်မလား... အပီအပြင် လိုးမလား...</b>\n" +
  "မောင်လေး စိတ်တိုင်းကျ ကဲနိုင်ဖို့ မမတို့ အထန်မလေးတွေ အကုန် စောင့်နေကြပြီနော်... <tg-emoji emoji-id='5318873730278923311'>👅</tg-emoji></blockquote>\n\n" +
  "အောက်က Menu ခလုတ်တွေကို အမြန်နှိပ်ပြီး မမတို့ဆီ လာခဲ့တော့... <tg-emoji emoji-id='5318831913982402120'>🫦</tg-emoji><tg-emoji emoji-id='5319128549648411604'>💦</tg-emoji>";

// Reply Keyboard အရောင်စုံ (ကိုကို့အကြိုက် Blue, Green, Red)
Api.sendMessage({
  chat_id: uid,
  text: welcome_text,
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [
      [
        { text: "👱🏼‍♀️ အထန်မလေးများ" }, 
        { text: "💎 ကြိုက်ကုန်းမမ (VIP)" }
      ],
      [{ text: "👄 အလုပ်လျောက်မယ် (Girl သီးသန့်)" }],
      [{ text: "📜 Rules" }, { text: "🚀 သူငယ်ချင်းများကို Share မည်" }]
    ],
    resize_keyboard: true,
    one_time_keyboard: false 
  }
});

