/*CMD
  command: /get_free
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
  command: /get_free
  need_reply: false
CMD*/

// ၁။ Point System စစ်ဆေးခြင်း
var points = Libs.ResourcesLib.userRes("points");

if (points.value() < 1) {
  var last_msg_id = User.getProperty("last_free_msg_id");
  var last_name = User.getProperty("last_free_name") || "အလှလေး";

  if (last_msg_id) {
    Api.editMessageCaption({
      chat_id: user.chatId,
      message_id: last_msg_id,
      caption: "<tg-emoji emoji-id=\"5190859184312167965\">💌</tg-emoji> အထန်မမလေး <b>" + last_name + "</b>\n━━━━━━━━━━━━",
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [] }
    });
  }

  var share_link = "https://t.me/share/url?url=https://t.me/" + bot.name + "?start=" + user.telegramid + "&text=" + encodeURIComponent("မမတို့နဲ့ အပြင်မှာ ချိန်းလိုးချင်လား? ဒီမှာလာကြည့်နော်... 🫦💦");
  
  Api.sendMessage({
    chat_id: user.chatId,
    text: "⚠️ <b>Master! Point မလုံလောက်တော့ပါ</b>\n\nပုံအသစ်တွေကြည့်ဖို့ အနည်းဆုံး <b>1 Pts</b> လိုအပ်ပါတယ်",
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [
      [{ text: "🤝 Invite လုပ်ပြီး 30 Pts ယူမယ်", url: share_link }],
      [{ text: "👑 VIP ဝယ်ယူမယ်", callback_data: "/buy" }]
    ]}
  });
  return;
}

// ၂။ DB 1 မှ 5 အထိ Data အားလုံးကို စုစည်းခြင်း
var infos = [];
var photos = [];

for (var i = 1; i <= 5; i++) {
  var db_text = Bot.getProperty("DB_FREE_TEXT" + i) || [];
  var db_photo = Bot.getProperty("DB_FREE_PHOTO" + i) || [];
  infos = infos.concat(db_text);
  photos = photos.concat(db_photo);
}

if (!photos || photos.length === 0) {
  return Bot.sendMessage("⚠️ <b>Profile မရှိသေးပါ Master</b>", { parse_mode: "HTML" });
}

// ၃။ Random Index Selection (မကြည့်ရသေးတာကို ရွေးမယ်)
var seen = User.getProperty("seen_free") || [];
var available = [];
for (var k = 0; k < photos.length; k++) {
  if (!seen.includes(k)) { available.push(k); }
}

// အကုန်ကြည့်ပြီးရင် Reset ပြန်လုပ်မယ်
if (available.length === 0) { 
  seen = []; 
  for (var m = 0; m < photos.length; m++) { available.push(m); }
}

var idx = available[Math.floor(Math.random() * available.length)];

// ၄။ Point နှုတ်ခြင်း & Love Count ယူခြင်း
points.remove(1); 
var current_pts = points.value();
var love_counts = Bot.getProperty("LOVE_COUNTS") || {};
var current_loves = love_counts[idx] || 0;

var data = infos[idx];
var display_name = (data && data.name) ? data.name : "အလှလေး";
var display_style = (data && data.style) ? data.style : "စွဲဆောင်မှုရှိသော";

// ၅။ Previous Message Flow (Caption ပြောင်းပြီး Button ဖြုတ်မယ်)
var last_msg_id_prev = User.getProperty("last_free_msg_id");
var last_name_prev = User.getProperty("last_free_name") || "အလှလေး";
User.setProperty("last_free_index", idx, "integer");

if (last_msg_id_prev) {
  Api.editMessageCaption({
    chat_id: user.chatId,
    message_id: last_msg_id_prev,
    caption: "<tg-emoji emoji-id=\"5190859184312167965\">💌</tg-emoji> အထန်မမလေး <b>" + last_name_prev + "</b>\n━━━━━━━━━━━━",
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [] }
  });
}

// ၆။ Caption အသစ် ပြင်ဆင်ခြင်း
var hidden_caption = 
    "<tg-emoji emoji-id=\"5190859184312167965\">💌</tg-emoji> အထန်လေး <b>" + display_name + "</b>\n"+
    "━━━━━━━━━━━━━━━━━━━━\n\n" +
    "<blockquote><tg-emoji emoji-id=\"5260399854500191689\">👤</tg-emoji> <b>အမည် •</b> <code>" + display_name + "</code></blockquote>\n" +
    "<blockquote><tg-emoji emoji-id=\"5429571366384842791\">👠</tg-emoji> <b>အမျိုးအစား •</b> <code>" + display_style + "</code></blockquote>\n\n" +
    " <tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b>မမအကြောင်း</b>\n" +
    "<blockquote><code>(အချက်အလက်ကြည့်ရန် နှိပ်ပါ)</code></blockquote>\n\n" +
    "<tg-emoji emoji-id=\"5436044822697750252\">➡</tg-emoji> <b>လက်ကျန် Point •</b> <code>" + current_pts + " Pts</code>" ;

// ၇။ Premium Inline Buttons
var buttons = [
  [
    { text: "❤️ " + current_loves, callback_data: "/give_love " + idx },
    { text: "အထန်ကမ္ဘာ ", url: "https://t.me/+JxoYRQdq3uJmY2U1", icon_custom_emoji_id: "5318831913982402120" }
  ],
  [
    { text: "အချက်အလက်ကြည့်ရန် ", callback_data: "/unlock_photo", icon_custom_emoji_id: "5429571366384842791" }
  ],
  [
    { text: "နောက်တစ်ယောက် ", callback_data: "/get_free", icon_custom_emoji_id: "6163724355516766526" }
  ]
];

// ၈။ Media ပို့ခြင်း (Protect Content & Spoiler ပါဝင်သည်)
var media = photos[idx];
var method = (media.type == "video") ? "sendVideo" : "sendPhoto";
var media_payload = {};
media_payload[media.type == "video" ? "video" : "photo"] = media.file_id;

Api[method](Object.assign(media_payload, {
  chat_id: user.telegramid,
  caption: hidden_caption,
  parse_mode: "HTML",
  has_spoiler: true, 
  protect_content: true,
  reply_markup: { inline_keyboard: buttons },
  on_result: "/on_sent_free" 
}));

// ၉။ Property သိမ်းဆည်းခြင်း
seen.push(idx);
User.setProperty("seen_free", seen, "json");
User.setProperty("last_free_name", display_name, "string");

