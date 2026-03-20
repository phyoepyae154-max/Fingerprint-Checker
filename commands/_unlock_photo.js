/*CMD
  command: /unlock_photo
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
  command: /unlock_photo
  need_reply: false
CMD*/

// ၁။ Point System စစ်ဆေးခြင်း
var points = Libs.ResourcesLib.userRes("points");
var idx = User.getProperty("last_free_index");

// ၂။ Unlock Status စစ်ဆေးခြင်း
var unlocked_list = User.getProperty("unlocked_free_list") || [];
var is_already_unlocked = unlocked_list.includes(idx);

// ၃။ Point နှုတ်ခြင်း (Unlock မလုပ်ရသေးရင်)
if (!is_already_unlocked) {
  if (points.value() < 5) {
    return Api.answerCallbackQuery({
      callback_query_id: request.id,
      text: "⚠️ Point မလုံလောက်ပါ (၅) မှတ် လိုအပ်ပါသည်\nလက်ရှိ Point: " + points.value(),
      show_alert: true
    });
  }
  points.remove(5);
  unlocked_list.push(idx);
  User.setProperty("unlocked_free_list", unlocked_list, "json");
}

// ၄။ Rating Logic
var all_rates = Bot.getProperty("PERMANENT_RATES") || {};
if (!all_rates[idx]) {
  all_rates[idx] = (Math.random() * (5.0 - 3.8) + 3.8).toFixed(1);
  Bot.setProperty("PERMANENT_RATES", all_rates, "json");
}
var star_num = all_rates[idx];

function getSmallStars(rating) {
  var r = Math.round(rating);
  return "★".repeat(r) + "☆".repeat(5 - r);
}

// ၅။ DB Data ဆွဲထုတ်ခြင်း (DB 1 to 5 အားလုံးကို ချိတ်ဆက်)
var db_text = [];
var db_photo = [];

for (var i = 1; i <= 5; i++) {
  db_text = db_text.concat(Bot.getProperty("DB_FREE_TEXT" + i) || []);
  db_photo = db_photo.concat(Bot.getProperty("DB_FREE_PHOTO" + i) || []);
}

var data = db_text[idx];
var real_media = db_photo[idx];

if (!data || !real_media) { 
  return Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ အချက်အလက် ရှာမတွေ့ပါ",
    show_alert: true
  });
}

// ၆။ Caption စာသား ပြင်ဆင်ခြင်း
var display_name = data.name || "အလှလေး";
var bot_link = "https://t.me/" + bot.name + "?start=" + user.telegramid;

var full_info = 
  "<tg-emoji emoji-id=\"5429571366384842791\">👑</tg-emoji> <b>" + display_name + "</b>  <tg-emoji emoji-id=\"5345946772583752624\">😌</tg-emoji>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "<blockquote><tg-emoji emoji-id=\"5260399854500191689\">👤</tg-emoji> <b>အမည် •</b> <code>" + display_name + "</code></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5361964771509808811\">🍷</tg-emoji> <b>အသက် •</b> <code>" + (data.age || "??") + " နှစ်</code></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5821128296217185461\">📍</tg-emoji> <b>နေရပ် •</b> <code>" + (data.city || "မသိရသေး") + "</code></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6059631768649077274\">📣</tg-emoji> <b>အမျိုးအစား •</b> <code>" + (data.style || "မောင်လေး ထန်နေလား") + "</code></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6194737030165959506\">🏆</tg-emoji> <b>စိတ်ကျေနပ်မှု •</b> <b>" + getSmallStars(star_num) + "</b> (" + star_num + " / 5)</blockquote>\n\n" +
  "<tg-emoji emoji-id=\"5190859184312167965\">💌</tg-emoji> <b>ခံစားချက်</b>\n" +
  "<blockquote><i>" + (data.status || "အလိုးခံချင်တယ်") + "</i></blockquote>\n\n" +
  "<tg-emoji emoji-id=\"5445076159668693123\">🍑</tg-emoji> <b>မမအကြောင်း</b>\n" +
  "<blockquote>" + (data.about || "စိတ်တိုင်းကျ ပြုစုပေးမှာပါနော်") + "</blockquote>\n\n" +
  "━━━━━━━━━━━━━━━━━━━━\n" +
  "<tg-emoji emoji-id=\"5436044822697750252\">💰</tg-emoji> <b>လက်ကျန် •</b> <code>" + points.value() + " Pts</code>";

// ၇။ Premium Buttons (icon_custom_emoji_id အသုံးပြုခြင်း)
var final_buttons = [
  [
    { 
      text: "Share ပေးမယ် ", 
      url: "https://t.me/share/url?url=" + encodeURIComponent(bot_link) + "&text=" + encodeURIComponent("ဒီမှာ မြန်မာအထန်မလေးတွေ အစုံရှိတယ်နော်"),
      icon_custom_emoji_id: "5974249837439224721" // Arrow/Share icon
    },
    { 
      text: "Vip ဝင်မယ် ", 
      callback_data: "/pay",
      icon_custom_emoji_id: "5197288647275071607" // Shield/Vip icon
    }
  ],
  [
    { 
      text: "အကောင့်ရယူမယ် ", 
      callback_data: "/check_points_for_account",
      icon_custom_emoji_id: "5445353829304387411" // Key/Card icon
    }
  ],
  [
    { 
      text: "နောက်တစ်ယောက် ", 
      callback_data: "/get_free",
      icon_custom_emoji_id: "6163724355516766526" // Next/Arrow icon
    }
  ]
];

// ၈။ Update Media
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: (real_media.type == "video" ? "video" : "photo"),
    media: real_media.file_id,
    caption: full_info,
    parse_mode: "HTML",
    has_spoiler: false 
  },
  reply_markup: { 
    inline_keyboard: final_buttons
  }
});

