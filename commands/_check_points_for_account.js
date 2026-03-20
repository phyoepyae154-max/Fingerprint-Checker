/*CMD
  command: /check_points_for_account
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
  command: /check_points_for_account
  need_reply: false
CMD*/

var points = Libs.ResourcesLib.userRes("points");
var needed = 500;
var idx = User.getProperty("last_free_index");

if (points.value() < needed) {
  var missing = (needed - points.value());
  
  // ⛔ Point မပြည့်ပါက ပြမည့်စာသား
  var reject_msg = 
    "<tg-emoji emoji-id=\"6125259697860645337\">❌</tg-emoji> <b>Point မလုံလောက်ပါ </b>\n" +
    "━━━━━━━━━━━━━━━━━━━━\n\n" +
    "<blockquote><tg-emoji emoji-id=\"5258514780469075716\">📂</tg-emoji> <b>လက်ရှိ Point •</b> <code>" + points.value() + " Pts</code></blockquote>\n" +
    "<blockquote><tg-emoji emoji-id=\"6064562906500959151\">⚡</tg-emoji> <b>လိုအပ်ချက် •</b> <code>" + missing + " Pts</code></blockquote>\n\n" +
    "<b>" + needed + " Pts</b> ရှိမှသာ အကောင့်ရယူနိုင်မှာဖြစ်ပါတယ်ရှင့် <tg-emoji emoji-id=\"6100252568607264352\">✅</tg-emoji> ";

  Api.editMessageCaption({
    message_id: request.message.message_id,
    caption: reject_msg,
    parse_mode: "HTML",
    reply_markup: { 
      inline_keyboard: [
        [
          { 
            text: "Invite လုပ်ပြီး Point ရှာမယ် ", 
            url: "https://t.me/share/url?url=https://t.me/" + bot.name + "?start=" + user.telegramid + "&text=ဒီမှာ မြန်မာအထန်မလေးတွေ အစုံရှိတယ်နော်...",
            icon_custom_emoji_id: "5974249837439224721" // Share icon
          }
        ],
        [
          { 
            text: "VIP တန်းဝယ်မယ် (၁၅,၀၀၀ ကျပ်) ", 
            callback_data: "/pay",
            icon_custom_emoji_id: "5197288647275071607" // Shield/VIP icon
          }
        ],
        [
          { 
            text: "နောက်သို့ ပြန်ဆုတ်မယ် ", 
            callback_data: "/unlock_photo",
            icon_custom_emoji_id: "6163724355516766526" // Back/Arrow icon
          }
        ]
      ] 
    }
  });

} else {
  // ✅ Point ပြည့်ပါက ပြမည့်စာသား
  var success_msg = 
    "<tg-emoji emoji-id=\"6127307254799535983\">✅</tg-emoji> <b>Point ပြည့်စုံသွားပါပြီ!</b>\n" +
    "━━━━━━━━━━━━━━━━━━━━\n\n" +
    "သခင်အလိုရှိတဲ့ အကောင့်ကိုရယူဖို့ အောက်က Admin ဆီကို အခုပဲ ဆက်သွယ်လိုက်ပါရှင်။";

  Api.editMessageCaption({
    message_id: request.message.message_id,
    caption: success_msg,
    parse_mode: "HTML",
    reply_markup: { 
      inline_keyboard: [
        [
          { 
            text: "Admin ဆီမှ အကောင့်ယူမယ် ", 
            url: "https://t.me/your_admin_id", // ⚠️ သခင့် Admin Username လဲရန်
            icon_custom_emoji_id: "5445353829304387411" // Card/Contact icon
          }
        ]
      ] 
    }
  });
}

