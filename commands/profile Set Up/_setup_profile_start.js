/*CMD
  command: /setup_profile_start
  help: 
  need_reply: false
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
  command: /setup_profile_start
*/

Api.sendMessage({
  chat_id: chat.chatid,
  text: "🫦 <b>မောင်လေးရဲ့ Profile ကို စတင်ဆောက်လုပ်တော့မှာမို့...</b>\n\nအရင်ဆုံး မောင့်ရဲ့ <b>အမည်</b> ကို ပြောပြပေးပါဦးနော်... 💋",
  parse_mode: "HTML"
});

// ဒီနေရာမှာ ကိုကို့ရဲ့ Profile Setup Flow (Wait for Reply) ကို ဆက်သွားပေးပါ
Bot.runCommand("👤 Profile ဆောက်မည်"); 

