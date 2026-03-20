/*CMD
  command: /check_invite
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /check_invite
  need_reply: false
CMD*/

// ၁။ လက်ရှိ Profile Data ကို ဆွဲထုတ်ခြင်း
var db_text1 = Bot.getProperty("DB_FREE_TEXT1") || [];
var db_text2 = Bot.getProperty("DB_FREE_TEXT2") || [];
var infos = db_text1.concat(db_text2);
var idx = User.getProperty("last_free_index");
var data = infos[idx];
var raw_name = (data && data.name) ? data.name : "အလှလေး";

// ၂။ Popup အရင်ပြမယ်
Api.answerCallbackQuery({
  callback_query_id: request.id,
  text: "⚠️ Share မပြည့်သေးလို့ " + raw_name + " အကောင့်မရယူနိုင်သေးပါရှင်။",
  show_alert: true
});

// ၃။ Popup ပိတ်သွားရင် စာသားအသစ်နဲ့ Button အသစ်ကို ပို့ပေးမယ်
// Premium Emoji ID များကို သခင်ပေးထားသည့်အတိုင်း \" Formula ဖြင့် သုံးထားသည်
var follow_up_text = "<tg-emoji emoji-id=\"5361964771509808811\">🍷</tg-emoji> <b>Hello ရှင့် " + raw_name + " နဲ့ ချိတ်မရရင် တခြားအထန်မလေးတွေကိုရော ထပ်ကြည့်ဦးမလားရှင့်..</b>";

Api.sendMessage({
  chat_id: user.telegramid,
  text: follow_up_text,
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [{ 
        text: "👸 နောက်တစ်ယောက်ကြည့်မယ်", 
        callback_data: "/get_free",
        icon_custom_emoji_id: "6163724355516766526" // Next icon
      }]
    ]
  }
});

