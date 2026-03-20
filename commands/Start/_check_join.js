/*CMD
  command: /check_join
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Start

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /check_join
*/

var status = options.result.status;
var isJoined = (status == "member" || status == "administrator" || status == "creator");

if (isJoined) {
  // Join ပြီးသားဆိုရင် တိုက်ရိုက် အထန် Menu ပြမယ်
  Bot.runCommand("/show_welcome_direct");
} else {
  // မ Join ရသေးရင် Join ခိုင်းမယ်
  var join_kb = [
    [{ text: "📢 Channel ကို အရင် Join ပါ", url: "https://t.me/your_channel_link" }],
    [{ text: "✅ Join ပြီးပါပြီ (Check)", callback_data: "/start" }]
  ];
  
  Bot.sendVideo("BAACAgUAAxkBAAEC1qJpmXA-i5aphY0jLGyiaP3lelKbFAACWCgAAgp80FScAlhSkT7O3ToE", {
    caption: "⚠️ <b>မောင်လေး... ရှေ့ဆက်ဖို့အတွက် မမတို့ရဲ့ Channel ကို အရင် Join ပေးပါဦးနော်။</b>",
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: join_kb }
  });
}

