/*CMD
  command: /pay
  help: 
  need_reply: false
  auto_retry_time: 
  folder: PayMent

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /pay
  need_reply: false
CMD*/

var choose_msg = 
  "<tg-emoji emoji-id=\"5429571366384842791\">👑</tg-emoji> <b>𝐕𝐈𝐏 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐥𝐚𝐧 ရွေးချယ်ပါ</b> ✨\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "<blockquote><tg-emoji emoji-id=\"6158862632926319619\">👉</tg-emoji> <b>နှစ်သက်ရာ Plan ကို ရွေးချယ်နိုင်ဝယ်ယူနိုင်ပါတယ် </b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6075835267212646290\">💋</tg-emoji> <b>မန်ဘာဝင်ထားရင် အထန်မမလေးတွေအကောင့်ကို ရယူနိုင်ပါတယ်</b></blockquote>\n\n" +
  "<tg-emoji emoji-id=\"5251203410396458957\">🛡</tg-emoji> <b>ယုံကြည်စိတ်ချရမှု အာမခံချက်</b>\n" +
  "━━━━━━━━━━━━━━━━━━━━\n" +
  "<blockquote><tg-emoji emoji-id=\"6269163801178804220\">✅</tg-emoji> <b>Admin ကိုယ်တိုင် ၁၀၀% တာဝန်ယူပါသည်</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269243378332864932\">✅</tg-emoji> <b>ငွေလွှဲပြီးလျှင် VIP တန်းရစေရမည်</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6114136544312824398\">🛡</tg-emoji> <b>လူကြီးမင်း အချက်အလက် လုံခြုံမှုရှိစေရမည်</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6127394124808065175\">🔔</tg-emoji> <b>လိမ်လည်မှု လုံးဝ(မရှိ)ကြောင်း အာမခံပါသည်</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6269316311172518259\">😭</tg-emoji> <b>မန်ဘာဝင်ပြီးမှ ပြန်ထွက်လျှင် ငွေပြန်မအမ်းပါ</b></blockquote>\n\n" +
  "━━━━━━━━━━━━━━━━━━━━";

var buttons = [
  [
    { text: "💬 Chat Plan", callback_data: "/view_chat_plan" },
    { text: "👠 Date Plan", callback_data: "/view_date_plan" }
  ],
  [
    { text: "⬅️ နောက်သို့ပြန်သွားမည်", callback_data: "/get_account" }
  ]
];

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: choose_msg,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

