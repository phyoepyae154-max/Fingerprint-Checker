/*CMD
  command: 🚀 သူငယ်ချင်းများကို Share မည်
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Myanmar

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Command Name: 🚀 သူငယ်ချင်းများကို Share မည်
var bot_link = "https://t.me/" + bot.name;
var share_url = "https://t.me/share/url?url=" + bot_link + "&text=ဒီမှာကြည့်စမ်း... အထန်မလေးတွေအစုံပဲဟေ့! 💦";

Api.sendMessage({
  text: "မောင်လေး... မမတို့ Bot လေးကို သူငယ်ချင်းတွေကို Share ပေးဖို့ အောက်ကခလုတ်ကို နှိပ်လိုက်နော်... 💋",
  reply_markup: {
    inline_keyboard: [[{ text: "🔗 Share Link ကိုနှိပ်ပါ", url: share_url }]]
  }
});

