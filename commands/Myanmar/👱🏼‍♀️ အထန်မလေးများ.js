/*CMD
  command: 👱🏼‍♀️ အထန်မလေးများ
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Myanmar

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: 👱🏼‍♀️ အထန်မလေးများ
*/

// ၁။ လက်ရှိ Keyboard ကို အရင်ဖျောက်မယ် (Delete Keyboard)
Api.sendMessage({
  chat_id: chat.chatid,
  text: "⌛ <i>အထန်မလေးများစာရင်းကို ခဏလေး စောင့်ပေးပါ မောင်လေး... 🫦</i>",
  parse_mode: "HTML",
  reply_markup: { remove_keyboard: true } // 👈 ဒီစာကြောင်းက Keyboard ကို ဖျက်ပစ်တာပါ
});

// ၂။ ပြီးမှ ပုံတွေပို့မယ့် /get_free ကို လှမ်းခေါ်မယ်
Bot.runCommand("/get_free");

