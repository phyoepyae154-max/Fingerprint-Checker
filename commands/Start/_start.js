/*CMD
  command: /start
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
  command: /start
  need_reply: false
CMD*/

var points = Libs.ResourcesLib.userRes("points");
var old_list = Bot.getProperty("USER_LIST") || [];
var new_list = Bot.getProperty("USER_LIST_2") || [];

// ၁။ ပထမဆုံးအကြိမ် (Unique User) ဟုတ်မဟုတ် စစ်ဆေးခြင်း
var has_received_bonus = User.getProperty("received_start_bonus_250");
var is_completely_new = (old_list.indexOf(user.telegramid) === -1 && new_list.indexOf(user.telegramid) === -1);

// ၂။ အသစ်စက်စက် User ဆိုမှ Channel ကို Noti ပို့ပြီး Bonus ပေးမယ်
if (!has_received_bonus) {
  points.add(250);
  User.setProperty("received_start_bonus_250", true, "boolean");
  
  if (is_completely_new) {
    new_list.push(user.telegramid);
    Bot.setProperty("USER_LIST_2", new_list, "json");
    
    // ✅ ဒီအပိုင်းက Channel ကို တစ်ခါပဲ ပို့ပါလိမ့်မယ်
    var channel_id = "@tonecreators";
    var info_msg = "👤 <b>New Unique User Detected!</b>\n" +
                   "━━━━━━━━━━━━━━━━━━━━\n" +
                   "🔹 <b>အမည် •</b> " + user.first_name + "\n" +
                   "🔹 <b>ID •</b> <code>" + user.telegramid + "</code>\n" +
                   "🔹 <b>Bonus •</b> 250 Pts (Granted)\n" +
                   "🔹 <b>Invited by •</b> " + (params ? "<code>" + params + "</code>" : "Direct Start");

    Api.sendMessage({
      chat_id: channel_id,
      text: info_msg,
      parse_mode: "HTML"
    });
  }
}

// ၃။ Referral Logic (၁ ယောက်ဖိတ် ၃၀ Point)
if (params && params != user.telegramid) {
  var ref_id = params;
  
  // အဖိတ်ခံရသူက (တကယ်အသစ်) ဖြစ်မှ Point ပေးမယ်
  if (is_completely_new) {
    var refPoints = Libs.ResourcesLib.anotherUserRes("points", ref_id);
    refPoints.add(30);
    
    var dirty_talks = [
      "မောင်လေး ရေ... မမ အောက်က ယားနေလို့ တစ်ခုခု လုပ်ပေးပါဦးလားဟင် 🫦",
      "မမ စောက်ပတ်လေးက မောင့်ကို မြင်ရင် အရည်တွေ တန်းထွက်တာပဲ... ယားလိုက်တာ မောင်ရယ် 💦"
    ];
    var chosen_text = "<b>(Bonus 30 Pts ရရှိပါပြီ)</b>\n\n" + dirty_talks[Math.floor(Math.random() * dirty_talks.length)];

    Bot.run({
      command: "/send_noti_to_ref",
      options: { target: ref_id, msg: chosen_text },
      run_after: 1
    });
  }
}

// ၄။ Start Message Display
var start_text = 
  "<tg-emoji emoji-id=\"6127394124808065175\">🔔</tg-emoji> <b>ကြိုက်ကုန်းမလေးများ</b>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "<blockquote><tg-emoji emoji-id=\"6158862632926319619\">👉</tg-emoji> <b>အထန်မလေးတွေနဲ့ အလကားချက်မလား </b>💦</blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6158862632926319619\">👉</tg-emoji> <b>ကြိုက်ကုန်းမလေးတွေနဲ့ \nအပြင်မှာတွေ့ပြီး ချိန်းလိုးချင်လား</b>💦</blockquote>\n\n" +
  "<tg-emoji emoji-id=\"5436044822697750252\">➡️</tg-emoji> <b>လက်ကျန် •</b> <code>" + points.value() + " Pts</code>";

// ၅။ Premium Buttons (icon_custom_emoji_id အသုံးပြုထားသည်)
var share_link = "https://t.me/share/url?url=https://t.me/" + bot.name + "?start=" + user.telegramid + "&text=" + encodeURIComponent("ဒီမှာ အထန်မလေးတွေ အလကားပေးနေတယ်နော်... 🫦💦");

var buttons = [
  [
    { 
      text: " ကြိုက်ကုန်းမမ", 
      url: "https://t.me/+JxoYRQdq3uJmY2U1",
      icon_custom_emoji_id: "6073506776462925517" 
    },
    { 
      text: " ဖိတ်ခေါ်မယ်", 
      url: share_link,
      icon_custom_emoji_id: "5974249837439224721"
    }
  ],
  [
    { 
      text: " အထန်မမကြည့်မယ်", 
      callback_data: "/get_free",
      icon_custom_emoji_id: "5429571366384842791"
    }
  ]
];

Api.sendMessage({
  chat_id: user.telegramid,
  text: start_text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

