/*CMD
  command: /get_free_auto_push1
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
  command: /get_free_auto_push
*/

// ၁။ ပို့မယ့် စာသားနဲ့ ပုံများကို Random Pool လုပ်ခြင်း
var push_messages = [
  {
    text: "🫦 <b>မောင်လေး... မမတို့ကို မေ့နေပြီလားဟင်?</b>\n\nအခုလေးတင် အထန်မလေးတစ်ယောက် <b>အသစ်</b> ရောက်လာတယ်နော်... 🍑\n\nမောင်လေး ကြည့်ဖို့ စောင့်နေတာ... အခုပဲ လာကြည့်လိုက်တော့နော်... 💦👅",
    photo: "AgACAgUAAxkBAAICz2miqqyoM1DALnBSAqYAAS3E9aNG5AACwA9rGyboGVXx5cx4CI9lBgEAAwIAA3kAAzoE"
  },
  {
    text: "🍑 <b>အိုး... မောင့်လီးကြီး တောင်နေပြီမလား?</b>\n\nမမတို့ဆီမှာ အခုမှတင်လိုက်တဲ့ <b>နို့ကြီးကြီး မမပုံတွေ</b> အများကြီးပဲနော်။ မောင်လေး တစ်ယောက်တည်း အာသာဖြေဖို့ အဆင်သင့်ပဲလား... 🫦💦",
    photo: "AgACAgUAAxkBAAIC1Wmiqte_G6GWDI-be_C4ZiSwbB0AA8IPaxsm6BlVY-8V7OkI4PQBAAMCAAN5AAM6BA"
  },
  {
    text: "👅 <b>စောက်ဖုတ်နှိုက်ပြနေတာ ကြည့်ချင်လား မောင်လေး...</b>\n\nVIP ထဲမှာတင်မကဘူး၊ Free group ထဲမှာလည်း အသစ်တွေ အများကြီး ထပ်တိုးထားတယ်နော်။ ချက်ချင်း လာကြည့်လိုက်တော့... 💦🫦",
    photo: "AgACAgUAAxkBAAIC1mmiqtfgjvQgAgbX8o1XpCIXgRYyAALDD2sbJugZVSilFt0f1H95AQADAgADeQADOgQ"
  }
];

// ၂။ Random တစ်ခုကို ရွေးချယ်ခြင်း
var random_push = push_messages[Math.floor(Math.random() * push_messages.length)];

var push_inline = [
  [{ text: "👱🏼‍♀️ အသစ်ရောက်တဲ့ မမလေးကြည့်မည်", callback_data: "/get_free" }]
];

// ၃။ ပုံနှင့် စာသား ပေးပို့ခြင်း
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: random_push.photo,
  caption: random_push.text,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: push_inline }
});

// ၄။ Loop ပြန်ပတ်ခြင်း (၁ နာရီခြား တစ်ခါ)
// is_unique: true ကြောင့် ပို့ပြီးသား Schedule အဟောင်းများကို ရှင်းထုတ်ပေးပါသည်
Bot.run({
  command: "/get_free_auto_push",
  run_after: 3600,
  options: { is_unique: true }
});

