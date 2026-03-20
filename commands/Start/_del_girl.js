/*CMD
  command: /del_girl
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
  command: /del_girl
  need_reply: false
  admin: true
CMD*/

if (!params) {
  return Bot.sendMessage("⚠️ ဖျက်ချင်တဲ့ ID နံပါတ်လေး ထည့်ပေးဦးလေ ကိုကို။\nဥပမာ - <code>/del_girl 0</code>", { parse_mode: "HTML" });
}

var idx = parseInt(params);
var photos = Bot.getProperty("DB_FREE_PHOTO") || [];
var infos = Bot.getProperty("DB_FREE_TEXT") || [];
var rates = Bot.getProperty("PERMANENT_RATES") || {};

if (idx >= 0 && idx < infos.length) {
  var deleted_name = infos[idx].name;

  // ၁။ တစ်ယောက်တည်းကိုပဲ DB ထဲကနေ ဖယ်ထုတ်မယ် (Splice)
  infos.splice(idx, 1);
  photos.splice(idx, 1);
  
  // ၂။ အဲ့ဒီ ID အတွက် သိမ်းထားတဲ့ Star Rate ကိုပါ ရှင်းမယ်
  delete rates[idx];

  // ၃။ DB ပြန်သိမ်းမယ်
  Bot.setProperty("DB_FREE_TEXT", infos, "json");
  Bot.setProperty("DB_FREE_PHOTO", photos, "json");
  Bot.setProperty("PERMANENT_RATES", rates, "json");

  Bot.sendMessage("✅ မမ <b>" + deleted_name + "</b> ကို DB ထဲကနေ အပြီးတိုင် မောင်းထုတ်လိုက်ပါပြီ ကိုကို။", { parse_mode: "HTML" });
} else {
  Bot.sendMessage("⚠️ အဲ့ဒီ ID နဲ့ မမ မရှိဘူး ကိုကို... ပြန်စစ်ကြည့်ပါဦး။");
}

