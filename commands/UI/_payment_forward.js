/*CMD
  command: /payment_forward
  help: 
  need_reply: false
  auto_retry_time: 
  folder: UI

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /payment_forward
  need_reply: false
CMD*/

var db_photo1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db_photo2 = Bot.getProperty("DB_FREE_PHOTO2") || [];
var photos = db_photo1.concat(db_photo2);

var idx = User.getProperty("last_free_index");
var last_media = photos[idx];

var part1_text = 
  "<b>မောင်လေး... ခုနလို မြင်နေရတဲ့ အထန်မမ မျိုးနဲ့ အပီအပြင် ထန်ချင်တာလား?</b> 🫦💦\n\n" +
  "<blockquote>╰┈➤ <b>အာသာဖြေဖော် မမ တွေလိုချင်လား ✨</b></blockquote>\n" +
  "<blockquote>╰┈➤ <b>နို့ကြီးကြီး ဖင်ကားကား အထန်မမ ကြိုက်ကုန်းမတွေနဲ့ ချိတ်မလား 🍑</b></blockquote>\n" +
  "<blockquote>╰┈➤ <b>Video Call နှိုက်ပြတာဘဲ တဝကြီးကြည့်မလား? 👅</b></blockquote>\n" +
  "<blockquote>╰┈➤ <b>Admin မမတွေက ၁၀၀% Safe ဖြစ်အောင် အာမခံချိတ်ပေးမှာ 🛡️</b></blockquote>";

var buttons = [
  [{ text: "🔥 အသေးစိတ်ကြည့်ရန် (VIP Info) ➡️", callback_data: "/vip_details" }],
  [{ text: "👸 အထန်မလေးများ ဆက်ကြည့်ရန် ➡️", callback_data: "/get_free" }]
];

if (last_media) {
  // 🛡️ Content Protection အပီအပြင် ထည့်သွင်းထားသည်
  Api.sendPhoto({
    chat_id: chat.chatid,
    photo: last_media.file_id,
    caption: part1_text,
    parse_mode: "HTML",
    protect_content: true, // 👈 Screenshot/Save ပိတ်လိုက်ပြီ
    reply_markup: { inline_keyboard: buttons }
  });
} else {
  Api.sendMessage({
    chat_id: chat.chatid,
    text: part1_text,
    parse_mode: "HTML",
    protect_content: true, // 👈 စာသားကိုပါ ကာကွယ်ထားသည်
    reply_markup: { inline_keyboard: buttons }
  });
}

