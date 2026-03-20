/*CMD
  command: /vip_details
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
  command: /vip_details
  need_reply: false
CMD*/

var part2_text = 
  "<b><tg-emoji emoji-id=\"4956430115425748019\">🔥</tg-emoji> VIP ကြိုက်ကုန်းမမကြီးများ အသေးစိတ် <tg-emoji emoji-id=\"5361964771509808811\">🥰</tg-emoji></b>\n\n" +
  "<blockquote><tg-emoji emoji-id=\"6053079151793933025\">🥰</tg-emoji> <b>VC မှာ အကုန်ချွတ်ပြီး စောက်ဖုတ် အဝနှိုက်ပြမယ် 👅</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6053002134440382309\">🍑</tg-emoji> <b>နို့ကြီးကြီး ဖင်ကားကား မမတွေနဲ့ တိုက်ရိုက်ချိတ်ပေးမယ် 🍑</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6052886080129076759\">🥰</tg-emoji> <b>Video Call မှာ အကုန်ချွတ်ပြပြီး စောက်ဖုတ်နှိုက်ပြမယ့် မမတွေကို VIP ထဲမှာပဲ တွေ့နိုင်မယ် 👅</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6052954352929214532\">🙊</tg-emoji> <b>မောင်လေး စိတ်တိုင်းကျ ခိုင်းသမျှလုပ်ပေးမယ့် Slave မလေးတွေ VIP မှာ စောင့်နေတယ် 🙊</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6053395351581232242\">🛡️</tg-emoji> <b>အပြင်မှာ ဖာချိတ်ရမှာ ကြောက်နေလား? VIP ထဲမှာ စိတ်ချရတဲ့ အထန်မမတွေ အများကြီးရှိတယ် 🛡️</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6053086199835265577\">🥰</tg-emoji> <b>Slave လုပ်မလား? ခွေးမလေးလို ခိုင်းမလား? စိတ်ကြိုက် ⛓️</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"6053395351581232242\">🛡️</tg-emoji> <b>အပြင်မှာ အာမခံချက်ရှိရှိ အပြတ်လိုးဖို့ Admin ကိုယ်တိုင်ချိတ်ပေးမှာ 🛡️</b></blockquote>\n" +
  "<blockquote><tg-emoji emoji-id=\"4956283601206379599\">🥰</tg-emoji> <b>ညဘက် အထီးကျန်မနေနဲ့ မမတွေနဲ့ အတူတူ လာထန်လိုက်နော် 😘</b></blockquote>\n\n" +
  "<b><tg-emoji emoji-id=\"5440539497383087970\">🥇</tg-emoji> Admin Service & Warranty</b>\n" +
  "╰┈➤ Admin မမတွေက ၂၄ နာရီလုံး အကောင်းဆုံး Service ပေးနေမှာပါရှင် <tg-emoji emoji-id=\"6127407924537986608\">😀</tg-emoji>\n\n" +
  "╰┈➤ တစ်စုံတစ်ခု အဆင်မပြေတာရှိရင် ငွေအပြည့်အဝ ပြန်အမ်းပေးကြောင်း အာမခံပါတယ် 💯\n\n" +
 
  "<blockquote><tg-emoji emoji-id=\"5210952531676504517\">❌</tg-emoji> ယခင်ဈေး - <s>၅၀,၀၀၀</s> MMK</blockquote>\n" +
  "<b><blockquote><tg-emoji emoji-id=\"5206607081334906820\">✔️</tg-emoji> ယခုဈေး - ၃၀,၀၀၀ MMK 💸</blockquote></b>\n\n" +
  "✨ <b>VIP မှာ တစ်လတိတိ အထန်မလေးတွေနဲ့ ထန်လို့ရပါမယ် 😘</b>\n\n" +
  "🚀 <b>လီးတောင်နေရင် အခုပဲ VIP ဝင်လိုက်တော့နော်</b>";

var buttons = [
  [{ 
    text: " VIP မန်ဘာဝင်မည် 💎", 
    callback_data: "/pay",
    icon_custom_emoji_id: "5397916757333654639" 
  }],
  [{ 
    text: "👸 အထန်မလေးများ ဆက်ကြည့်မည်", 
    callback_data: "/get_free",
    icon_custom_emoji_id: "5282843764451195532" 
  }]
];

// Caption ကို Edit လုပ်ခြင်း
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: part2_text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

