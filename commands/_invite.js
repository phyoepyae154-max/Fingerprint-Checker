/*CMD
  command: /invite
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
  command: /invite_free
  need_reply: false
CMD*/

// ၁။ DB နှင့် လိုအပ်သော Data များဆွဲထုတ်ခြင်း
var db_text1 = Bot.getProperty("DB_FREE_TEXT1") || [];
var db_text2 = Bot.getProperty("DB_FREE_TEXT2") || [];
var infos = db_text1.concat(db_text2);

var db_photo1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db_photo2 = Bot.getProperty("DB_FREE_PHOTO2") || [];
var photos = db_photo1.concat(db_photo2);

var idx = User.getProperty("last_free_index");
var data = infos[idx];
var last_media = photos[idx];

// ၂။ Invite Count ယူခြင်း (သခင့်ညစ်ကွက် ၄ ယောက်မှာ ရပ်မည်)
var invites = Bot.getProperty("invites_count_" + user.telegramid, 0);
var display_invites = (invites >= 9) ? 9 : invites;

// ၃။ Data များကို Mono Format ပြောင်းခြင်း
var raw_name = (data && data.name) ? data.name : "အလှလေး";
var display_name = "<code>" + raw_name + "</code>";
var city = (data && data.city) ? "<code>" + data.city + "</code>" : "<code>မသိရ</code>";

// ၄။ Caption စာသား (Premium ID များဖြင့်)
var dash_text = "  (" + city + ") <tg-emoji emoji-id=\"5821128296217185461\">📍</tg-emoji>\n\n  <tg-emoji emoji-id=\"5825690573687754521\">👑</tg-emoji> " + display_name + "<b> နဲ့ ချိတ်မယ်ဆို \nသူငယ်ချင်း 10 ယောက်ကို Share ပေးပါရှင်....</b>\n\n";

// ၅။ Universal Share Link & Buttons
var share_link = "https://t.me/share/url?url=https://t.me/" + bot.name + "?start=" + user.telegramid + "&text=မမတို့နဲ့ အပြင်မှာ အပီအပြင် ချိန်းလိုးချင်လား? ဒီ Bot ထဲမှာ လာချိတ်လိုက်တော့နော်... 🫦💦";

var buttons = [
  [{ 
    text: "Share မယ် (" + display_invites + "/10)", 
    url: share_link,
    icon_custom_emoji_id: "5821453562680448557" // 🔐 ID
  }],
  [{ 
    text: "အကောင့်ရယူမယ်", 
    callback_data: "/check_invite", // Popup ပြမည့် function ဆီပို့မည်
    icon_custom_emoji_id: "5429571366384842791" // Search/Get icon
  }]
];

// ၆။ Media ဖြင့် ပို့လွှတ်ခြင်း
if (last_media) {
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: last_media.file_id,
    caption: dash_text,
    parse_mode: "HTML",
    protect_content: true,
    reply_markup: { inline_keyboard: buttons }
  });
} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: dash_text,
    parse_mode: "HTML",
    protect_content: true,
    reply_markup: { inline_keyboard: buttons }
  });
}

