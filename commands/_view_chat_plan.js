/*CMD
  command: /view_chat_plan
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
  command: /view_chat_plan
  need_reply: false
CMD*/

var chat_fantasy = 
  "<tg-emoji emoji-id=\"5429571366384842791\">👑</tg-emoji> <b>𝐕𝐈𝐏 𝐂𝐡𝐚𝐭 𝐏𝐥𝐚𝐧 အသေးစိတ် <tg-emoji emoji-id=\"6269232765468676321\">🎖️</tg-emoji> </b> \n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>မမတို့ဆီက အယွသံလေးတွေ နားထောင်မလား</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>အယွမလေးတွေရဲ့ လီးဆာသံကို VC မှာ နားထောင်</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>Wattpad ထက်လန်းတဲ့ အထန်ဇာတ်လမ်းတွေ ချက်မလား</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>အဝတ်တွေ ချွတ်ခိုင်းပြီး VC မှာ အငမ်းမရ ကြည့်မလား</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>လီးပြပြီး စောက်ပတ်ကို အားရပါးရ နိုက်ခိုင်းမလား</b> <tg-emoji emoji-id=\"5386784322361502863\">🍒</tg-emoji></blockquote>\n\n" +
  "<blockquote><tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b>ထန်ထန်လေး စာနဲ့ချက်မလား</b> <tg-emoji emoji-id=\"5363943823720333444\">⚡️</tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b>အယွမလေး အသံနားထောင်မလား</b> <tg-emoji emoji-id=\"5260652149469094137\">🎙</tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b>Vc နဲ့ခိုင်းချင်တာ ခိုင်းမလား</b> <tg-emoji emoji-id=\"4956250031741993892\">▶️</tg-emoji></blockquote>\n\n" +
  "━━━━━━━━━━━━━━━━━━━━\n" +
  "<blockquote><tg-emoji emoji-id=\"5197288647275071607\">🛡</tg-emoji> <b>ဈေးနှုန်း - ၁၅,၀၀၀ ကျပ် (၁ လစာ)</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5382194935057372936\">⏱</tg-emoji> <b>၂၄ နာရီပတ်လုံး Online ရှိသည်</b></blockquote>\n" +
  "<blockquote>⭐ <b>ဖာဆန်မလေးတွေကို နိပ်စက်ဖို့ Admin ဆီ အမြန်လာပါ</b></blockquote>\n" +
  "━━━━━━━━━━━━━━━━━━━━";

var buttons = [
  [{ text: "📩 Admin ဆီမှ VIP ဝယ်  ယူမည်", url: "https://t.me/Phoo22344" }],
  [{ text: "⬅️ နောက်သို့", callback_data: "/pay" }]
];

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: chat_fantasy,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

