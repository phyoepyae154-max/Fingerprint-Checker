/*CMD
  command: /broadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Broadcast

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /broadcast
  need_reply: false
CMD*/

if (user.telegramid != 1981611974) { return; }

Bot.sendMessage("📸 ကိုကို... Broadcast ပို့မယ့် **ပုံ (Photo)** ကို အရင်ပို့ပေးပါရှင်။\n(မပို့ချင်ရင် /skip လို့ ရိုက်ပါ)");
Bot.run({ command: "/get_photo" });

