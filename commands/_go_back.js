/*CMD
  command: /go_back
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
  command: /go_back
  need_reply: false
CMD*/

var history = User.getProperty("nav_history") || [];

// အနည်းဆုံး ၂ ပုံရှိမှ နောက်ပြန်ဆုတ်လို့ရမယ် (လက်ရှိပုံ + အရင်ပုံ)
if (history.length < 2) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ နောက်ဆုတ်စရာ Profile မရှိတော့ပါဘူးရှင်။",
    show_alert: false
  });
  return;
}

// လက်ရှိပုံကို Stack ထဲက ဖယ်ထုတ်မယ်
history.pop();
// အရင်ပုံ index ကို ယူမယ်
var prev_idx = history[history.length - 1];
// History ကို update ပြန်လုပ်မယ်
User.setProperty("nav_history", history, "json");

// အရင်ပုံဒေတာတွေ ပြန်ယူမယ်
var photos = (Bot.getProperty("DB_FREE_PHOTO1") || []).concat(Bot.getProperty("DB_FREE_PHOTO2") || []);
var infos = (Bot.getProperty("DB_FREE_TEXT1") || []).concat(Bot.getProperty("DB_FREE_TEXT2") || []);

var love_counts = Bot.getProperty("LOVE_COUNTS") || {};
var current_loves = love_counts[prev_idx] || 0;
var display_name = (infos[prev_idx] && infos[prev_idx].name) ? infos[prev_idx].name : "အလှလေး";

var hidden_caption = 
    "<tg-emoji emoji-id=\"5190859184312167965\">💌</tg-emoji> အထန်မလေး <b>" + display_name + "</b> <tg-emoji emoji-id=\"5345946772583752624\">😌</tg-emoji>\n"+
    "━━━━━━━━━━━━━━━━━━━━\n\n" +
    "<blockquote><tg-emoji emoji-id=\"5316727448644103237\">👤</tg-emoji> <b>အမည် •</b> <code>" + display_name + "</code></blockquote>\n" +
    "<blockquote><tg-emoji emoji-id=\"5361964771509808811\">🍷</tg-emoji> <b>အသက် •</b> <code>****</code></blockquote>\n" +
    "<blockquote><tg-emoji emoji-id=\"5821128296217185461\">📍</tg-emoji> <b>နေရပ် •</b> <code>****</code></blockquote>\n" +
    "<blockquote><tg-emoji emoji-id=\"6127394124808065175\">😀</tg-emoji> <b>စိတ်ကျေနပ်မှု •</b> <code>4.5/5.0</code></blockquote>\n\n" +
    " <tg-emoji emoji-id=\"5449800250032143374\">🎁</tg-emoji> <b>မမအကြောင်း</b>\n" +
    "<blockquote><code>**** **** ****</code></blockquote>\n\n";

var buttons = [
  [{ text: "❤️ " + current_loves, callback_data: "/give_love " + prev_idx }, { text: "အထန်ကမ္ဘာ 🍌", url: "https://t.me/+JxoYRQdq3uJmY2U1" }],
  [{ text: "အချက်အလက်ကြည့်ရန်", callback_data: "/unlock_photo" }],
  [{ text: "⬅️ နောက်ဆုတ်", callback_data: "/go_back" }, { text: "နောက်တစ်ယောက် ➡️", callback_data: "/get_free" }]
];

// Edit လုပ်ပြီး အရင်ပုံကို ပြန်ပြမယ်
Api.editMessageMedia({
  message_id: request.message.message_id,
  chat_id: user.telegramid,
  media: JSON.stringify({
    type: (photos[prev_idx].type == "video" ? "video" : "photo"),
    media: photos[prev_idx].file_id,
    caption: hidden_caption,
    parse_mode: "HTML",
    has_spoiler: true
  }),
  reply_markup: JSON.stringify({ inline_keyboard: buttons })
});

