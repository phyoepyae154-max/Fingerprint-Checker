/*CMD
  command: setLocation
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
  command: setLocation
  need_reply: true
CMD*/

if (message == "အခြားမြို့") {
  Bot.sendMessage("🫦 <b>မောင့်ရဲ့ မြို့နာမည်လေးကို ရိုက်ပို့ပေးပါဦးရှင်...</b>");
  Bot.runCommand("setLocation");
  return;
}

if (message.length < 5) {
  Bot.sendMessage("⚠️ <b>တည်နေရာကို အသေးစိတ်လေး ရေးပေးပါဦး...</b>\n(ဥပမာ - ရန်ကုန်၊ လှိုင်သာယာ)");
  Bot.runCommand("setLocation");
} else {
  User.setProperty("u_location", message, "string");

  Bot.sendMessage("📸 <b>မောင့်ရဲ့ ဓာတ်ပုံလန်းလန်းလေးတွေ (၁ ပုံမှ ၃ ပုံထိ) ပို့ပေးပါ</b>", {
    reply_markup: { keyboard: [[{ text: "✅ ပြီးပါပြီ (Done)" }]], resize_keyboard: true }
  });
  Bot.runCommand("setPhoto");
}

