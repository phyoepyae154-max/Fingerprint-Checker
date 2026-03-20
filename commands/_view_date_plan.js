/*CMD
  command: /view_date_plan
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
  command: /view_date_plan
  need_reply: false
CMD*/

var date_plan_text = 
  "<tg-emoji emoji-id=\"5429571366384842791\">👑</tg-emoji> <b>𝐃𝐚𝐭𝐞 𝐏𝐥𝐚𝐧 အသေးစိတ်</b> ✨\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>အပြင်မှာ လူချင်းတွေ့ပြီး အပီအပြင်ကဲမလား</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>Condom သုံးခိုင်းရင်လည်း သုံးပေးရမယ်နော်</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>Safety & Health ကို ၁၀၀% အာမခံ ဆောင်ရွက်ပေးပါတယ်</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>Admin ကိုယ်တိုင် တာဝန်ယူ ချိတ်ဆက်ပေးမှာပါနော်</b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269085886177087845\">➡️</tg-emoji> <b>Member အချက်အလက် လုံးဝလျှို့ဝှက်ပေးထားပါမည် </b> <tg-emoji emoji-id=\"5386784322361502863\"></tg-emoji></blockquote>\n\n" +
  "<blockquote><tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b>စိတ်တိုင်းကျ ချိန်းတွေ့ဖို့ အဆင်သင့်ပဲလား</b> <tg-emoji emoji-id=\"6127307254799535983\">✅</tg-emoji></blockquote>\n" +
    "<blockquote><tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b>ငွေထပ်မပေးရပါဘူးနော် ကြိုက်ကုန်းမလေးတွေနဲ့ ချိတ်ပေးပါတယ် </b> <tg-emoji emoji-id=\"6127307254799535983\">✅</tg-emoji></blockquote>\n" +
  
  "<blockquote><tg-emoji emoji-id=\"5282843764451195532\">🖥</tg-emoji> <b> မန်ဘာတိုင်းကို ဖော်​ဖော်ရွေရွေ နဲ့ ထန်ထန်လေးဘဲ ခေါ်ဝေါ်ပြောဆို ကြမှာပါ </b> <tg-emoji emoji-id=\"6127307254799535983\">✅</tg-emoji></blockquote>\n\n" +
  "━━━━━━━━━━━━━━━━━━━━\n" +
  "<blockquote><tg-emoji emoji-id=\"5197288647275071607\">🛡</tg-emoji> <b>ဈေးနှုန်း - ၃၀,၀၀၀ ကျပ် (HOT)</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"5382194935057372936\">⏱</tg-emoji> <b>၂၄ နာရီပတ်လုံး ချိတ်ဆက်ပေးနေပါသည်</b></blockquote>\n" +
  "<blockquote>⭐ <b>တစ်ခါဝယ်ပြီးရင် တစ်လစာ စိတ်ကြိုက်ကဲပါ</b></blockquote>\n" +
  "━━━━━━━━━━━━━━━━━━━━";

var buttons = [
  [{ text: "📩 Admin ဆီမှ မန်ဘာ ယူမည်", url: "https://t.me/Phoo22344" }],
  [{ text: "⬅️ နောက်သို့", callback_data: "/pay" }]
];

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: date_plan_text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

