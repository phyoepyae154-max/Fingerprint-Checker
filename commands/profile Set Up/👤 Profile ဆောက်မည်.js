/*CMD
  command: 👤 Profile ဆောက်မည်
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
  command: 👤 Profile ဆောက်မည်
  need_reply: false
CMD*/

let tg_name = user.first_name; // Telegram မှာ သုံးထားတဲ့ နာမည်ယူခြင်း

let setup_text = 
  "🫦 <b>မောင့်ရဲ့ အထန် Profile ပြန်ဆောက်ရအောင်</b> 🍑\n" +
  "━━━━━━━━━━━━━━━━━━━━\n\n" +
  "✍️ <b>မောင့်ရဲ့ နာမည်လေးကို အောက်က နာမည်အတိုင်း ထားမလားဟင်?</b>";

// Keyboard မှာ Telegram နာမည်ကို ပြပေးခြင်း
Api.sendMessage({
  text: setup_text,
  parse_mode: "HTML",
  reply_markup: {
    keyboard: [[{ text: tg_name }]], // Telegram နာမည်ကို Button အဖြစ်ပြမည်
    resize_keyboard: true,
    one_time_keyboard: true
  }
});

Bot.runCommand("setName");

