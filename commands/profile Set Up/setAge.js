/*CMD
  command: setAge
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
  command: setAge
  need_reply: true
CMD*/

// ၁။ မြန်မာဂဏန်းများကို အင်္ဂလိပ်ဂဏန်းသို့ ပြောင်းလဲပေးသည့် Function
function toEnglishNumber(str) {
  let myanNumbers = {
    '၀': '0', '၁': '1', '၂': '2', '၃': '3', '၄': '4',
    '၅': '5', '၆': '6', '၇': '7', '၈': '8', '၉': '9'
  };
  return str.replace(/[၀-၉]/g, function(s) {
    return myanNumbers[s];
  });
}

// ၂။ User ရိုက်လိုက်တဲ့စာသားကို အင်္ဂလိပ်ဂဏန်းပြောင်းပြီး စစ်ဆေးခြင်း
let inputAge = toEnglishNumber(message);
let age = parseInt(inputAge);

// ၃။ အသက် ကန့်သတ်ချက် စစ်ဆေးခြင်း
if (isNaN(age) || age <= 17) {
  Api.sendMessage({
    text: "⚠️ <b>မောင်လေးက ငယ်လွန်းသေးတယ်နော်...</b>\nအသက် ၁၇ နှစ်အထက်မှသာ စာရင်းသွင်းလို့ ရမှာပါရှင်။ \n\n(ဥပမာ - ၁၈ သို့မဟုတ် 20 ဟု ဂဏန်းဖြင့် ရိုက်ပေးပါ)",
    parse_mode: "HTML"
  });
  Bot.runCommand("setAge");
} else {
  // ၄။ Database ထဲမှာ အင်္ဂလိပ်ဂဏန်းအတိုင်း Auto Save လုပ်ခြင်း
  User.setProperty("u_age", age.toString(), "string");

  Api.sendMessage({
    text: "🫦 <b>မောင်လေး ဘယ်မြို့မှာ နေတာလဲဟင်?</b> <tg-emoji emoji-id='5312526553238838345'>📍</tg-emoji>",
    parse_mode: "HTML",
    reply_markup: {
      keyboard: [
        [{ text: "ရန်ကုန်" }, { text: "မန္တလေး" }],
        [{ text: "အခြားမြို့" }]
      ],
      resize_keyboard: true, 
      one_time_keyboard: true
    }
  });
  Bot.runCommand("setLocation");
}

