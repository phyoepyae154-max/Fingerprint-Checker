/*CMD
  command: /Hi
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

Api.sendMessage({
  chat_id: user.telegramid,
  text: "<b><tg-emoji emoji-id=\"5318831913982402120\">🫦</tg-emoji> မမတို့ရဲ့ နန်းတော်ကို ရောက်ရှိလာပါပြီ။</b>\n\nမောင်လေး စိတ်ကြိုက် လည်ပတ်နိုင်ဖို့ အောက်က Menu တွေကို နှိပ်လိုက်တော့နော်... <tg-emoji emoji-id=\"5319128549648411604\">💦</tg-emoji>",
  parse_mode: "HTML",
  reply_markup: {
    inline_keyboard: [
      [
        { 
          text: "ကြိုက်ကုန်းမမ Channel", 
          url: "https://t.me/+ozCbup51jfFhMzU1",
          style: "primary", // အပြာရောင်
          icon: { custom_emoji_id: "5361964771509808811" } // မှန်ကန်သော format
        },
        { 
          text: "အထန်မမလေးများ", 
          callback_data: "/get_free",
          style: "danger", // အနီရောင်
          icon: { custom_emoji_id: "5375071517048578011" }
        }
      ],
      [
        { 
          text: "VIP Free ရယူမယ် (50 Invite)", 
          callback_data: "/invite_free",
          style: "success", // အစိမ်းရောင်
          icon: { custom_emoji_id: "5375071517048578011" }
        }
      ]
    ]
  }
});

