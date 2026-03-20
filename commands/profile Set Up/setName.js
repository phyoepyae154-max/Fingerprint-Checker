/*CMD
  command: setName
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
  command: setName
  need_reply: true
CMD*/

if (message.length < 5) {
  // နာမည်တိုလွန်းလျှင် Keyboard ကို ဖျက်ပြီး ပြန်မေးမည်
  Api.sendMessage({
    text: "⚠️ <b>မောင့်နာမည်က အရမ်းတိုလွန်းတယ်...</b>\nအနည်းဆုံး စာလုံးရေ ၅ လုံးရှိတဲ့ နာမည်လေး ပေးပါဦးရှင်။",
    parse_mode: "HTML",
    reply_markup: { remove_keyboard: true }
  });
  Bot.runCommand("setName");
} else {
  // နာမည်မှန်လျှင် သိမ်းဆည်းပြီး Keyboard ကို ရှင်းထုတ်မည်
  User.setProperty("u_name", message, "string");
  
  // အသက်မေးသည့် အဆင့်သို့ သွားခြင်း (Keyboard အသစ်ဖြင့်)
  Api.sendMessage({
    text: "🫦 <b>မောင့်ရဲ့ အသက်လေးက ဘယ်လောက်လဲဟင်?</b>",
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [
        [{ text: "၁၈" }, { text: "၂၀" }, { text: "၂၂" }], 
        [{ text: "၂၅" }, { text: "၂၈" }, { text: "၃၀" }]
      ],
      resize_keyboard: true, 
      one_time_keyboard: true // နှိပ်ပြီးလျှင် Keyboard အလိုအလျောက် ပျောက်သွားမည်
    }
  });
  
  Bot.runCommand("setAge");
}

