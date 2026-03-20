/*CMD
  command: setAbout
  help: 
  need_reply: true
  auto_retry_time: 
  folder: profile Set Up

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: setAbout
  need_reply: true
CMD*/

if (message.length < 10) {
  Bot.sendMessage("⚠️ <b>မောင့်အကြောင်းလေးကို ပိုရှည်ရှည်လေး ရေးပေးပါဦး...</b>\n(အနည်းဆုံး စာလုံးရေ ၁၀ လုံး ရေးပေးနော်)");
  Bot.runCommand("setAbout");
} else {
  User.setProperty("u_about", message, "string");
  
  Api.sendMessage({
    text: "🫦 <b>မောင့်ရဲ့ Profile ဆောက်လို့ ပြီးသွားပါပြီ။</b>",
    reply_markup: { remove_keyboard: true }
  });
  
  Bot.runCommand("/myprofile");
}

