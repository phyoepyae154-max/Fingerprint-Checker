/*CMD
  command: /generous_move
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
  command: /generous_move
CMD*/

var mercy_text = "စိတ်မကောင်းမဖြစ်နဲ့တော့ ကိုကိုရယ်... <tg-emoji emoji-id=5312211477709560133>✨</tg-emoji>\n\n" +
  "ကိုကို ငွေမတတ်နိုင်လည်း ကိစ္စမရှိပါဘူး။ မမက ကိုကို့ကို သနားလို့ အခုတစ်ခါတော့ <b>အလကားပဲ ကြည့်ခွင့်ပေးလိုက်မယ်နော်။</b>\n\n" +
  "ကဲ... နောက်ထပ် အလန်းစား မမတစ်ယောက်ကို ဆက်ကြည့်လိုက်တော့... <tg-emoji emoji-id=5465061730040327310>💋</tg-emoji>";

Api.sendMessage({
  text: mercy_text,
  parse_mode: "HTML"
});

// ⚡ စာပို့ပြီး (၂) စက္ကန့်နေရင် နောက်တစ်ယောက်ကို တန်းပြမယ်
Bot.run({
  command: "/get_free",
  delay: 2
});

