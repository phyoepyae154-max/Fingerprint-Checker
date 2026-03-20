/*CMD
  command: setPhoto
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
  command: setPhoto
  need_reply: true
CMD*/

// ၁။ လက်ရှိ သိမ်းထားသော ပုံများကို ယူခြင်း (မရှိလျှင် Array အလွတ်ယူမည်)
let photos = User.getProperty("u_photos", []);

// ၂။ "Done" ခလုတ်နှိပ်လိုက်လျှင် (အနည်းဆုံး ၁ ပုံ ရှိရမည်)
if (message == "✅ ပြီးပါပြီ (Done)") {
  if (photos.length >= 1) {
    Api.sendMessage({ 
      text: "🫦 <b>မောင့်အကြောင်း အနည်းငယ် ရေးပေးပါဦး (ဘယ်လိုမမမျိုး ကြိုက်လဲ စသဖြင့်)</b>", 
      parse_mode: "HTML",
      reply_markup: { remove_keyboard: true }
    });
    Bot.runCommand("setAbout");
    return; // ရှေ့ဆက်မသွားစေရန် ရပ်လိုက်ခြင်း
  } else {
    Bot.sendMessage("ကိုကို... အနည်းဆုံး ၁ ပုံတော့ တင်ပေးရမှာပါရှင်။");
    Bot.runCommand("setPhoto");
    return;
  }
}

// ၃။ ပုံ လက်ခံရရှိခြင်း Logic
if (request.photo && request.photo.length > 0) {
  let photo_id = request.photo[request.photo.length - 1].file_id;
  photos.push(photo_id);
  User.setProperty("u_photos", photos, "json");

  // ၄။ ၃ ပုံ ပြည့်သွားလျှင် About သို့ တန်းသွားမည်
  if (photos.length >= 3) {
    Api.sendMessage({ 
      text: "📸 ၃ ပုံပြည့်သွားပါပြီ! \n\n🫦 <b>မောင့်အကြောင်း အနည်းငယ် ရေးပေးပါဦး</b>", 
      parse_mode: "HTML",
      reply_markup: { remove_keyboard: true }
    });
    Bot.runCommand("setAbout");
  } 
  // ၅။ ၃ ပုံ မပြည့်သေးလျှင် ထပ်တောင်းမည်
  else {
    let remain = 3 - photos.length;
    Api.sendMessage({
      text: "📸 မောင်လေး နောက်ထပ် ( " + remain + " ) ပုံ ထပ်တင်လို့ရပါသေးတယ်။ \n\nမတင်တော့ဘူးဆိုရင် အောက်က Done ကို နှိပ်ပါနော်။",
      reply_markup: { 
        keyboard: [[{ text: "✅ ပြီးပါပြီ (Done)" }]], 
        resize_keyboard: true 
      }
    });
    Bot.runCommand("setPhoto");
  }
} else {
  // ပုံမဟုတ်တာ ပို့လာလျှင် ပြန်တောင်းခြင်း
  Bot.sendMessage("ကိုကို... ဓာတ်ပုံလေး ပို့ပေးမှ ရမှာပါရှင်။");
  Bot.runCommand("setPhoto");
}

