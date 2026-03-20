/*CMD
  command: /get_account
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
  command: /get_account
  need_reply: false
CMD*/

// ၁။ အချက်အလက်များ ဆွဲထုတ်ခြင်း
var idx = User.getProperty("last_free_index");
var db_text1 = Bot.getProperty("DB_FREE_TEXT1") || [];
var db_text2 = Bot.getProperty("DB_FREE_TEXT2") || [];
var infos = db_text1.concat(db_text2);

var data = infos[idx];

if (!data) {
  return Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ အချက်အလက် ရှာမတွေ့ပါ။",
    show_alert: true
  });
}

// ၂။ ပရိုဖိုင် Layout (၁ ကြောင်းချင်းစီ Blockquote - Edit လုပ်ရန်အတွက်)
var display_name = data.name || "အလှလေး";
var display_city = data.city || "မသိရသေး";
var display_style = data.style || "အလန်းစား";

var account_info = 
  "<tg-emoji emoji-id=\"5429571366384842791\">👑</tg-emoji> <b>" + display_name + " ရဲ့ အကောင့်ရယူမယ်</b>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "<blockquote><tg-emoji emoji-id=\"5260399854500191689\">👤</tg-emoji> <b>အမည် •</b> <code>" + display_name + "</code></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6059631768649077274\">📣</tg-emoji> <b>Type •</b> <code>" + display_style + "</code></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5821128296217185461\">📍</tg-emoji> <b>နေရပ် •</b> <code>" + display_city + "</code></blockquote>\n\n" +
  "<tg-emoji emoji-id=\"6127307254799535983\">✅</tg-emoji> <b>ရယူနိုင်သော နည်းလမ်းများ</b>\n\n" +
  "<blockquote><tg-emoji emoji-id=\"5190859184312167965\">💌</tg-emoji> <b>500 Point</b> ဖြင့် အလကားယူရန်</blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5429571366384842791\">👑</tg-emoji> <b>၁၅,၀၀၀ ကျပ်</b> ဖြင့် VIP ဝယ်ယူရန်</blockquote>\n\n" +
  "━━━━━━━━━━━━━━━━━━━━";

// ၃။ Buttons with Premium Emoji IDs
var bot_link = "https://t.me/" + bot.name + "?start=" + user.telegramid;
var buttons = [
  [
    { 
      text: "Share (Invite)", 
      url: "https://t.me/share/url?url=" + encodeURIComponent(bot_link),
      icon_custom_emoji_id: "6127197926407016775" 
    },
    { 
      text: "VIP ဝယ်ယူမယ်", 
      callback_data: "/pay",
      icon_custom_emoji_id: "5429571366384842791" 
    }
  ],
  [
    { 
      text: "အကောင့်ရယူမယ် (500 Pts)", 
      callback_data: "/check_points_for_account",
      icon_custom_emoji_id: "6127307254799535983" 
    }
  ],
  [
    { 
      text: "နောက်တစ်ယောက်ကြည့်မယ်", 
      callback_data: "/get_free",
      icon_custom_emoji_id: "6075489552410090622" 
    }
  ]
];

// ၄။ Message Caption ကို Edit လုပ်ခြင်း (Send New အစား Edit သုံးလိုက်ခြင်း)
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: account_info,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

