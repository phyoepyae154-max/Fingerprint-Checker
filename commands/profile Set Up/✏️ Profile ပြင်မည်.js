/*CMD
  command: ✏️ Profile ပြင်မည်
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
  command: ✏️ Profile ပြင်မည်
  need_reply: false
CMD*/

// ၁။ အချက်အလက်များကို အမှန်တကယ် Reset လုပ်ခြင်း
User.setProperty("u_name", "", "string");        // စာသားအလွတ်
User.setProperty("u_age", "", "string");         // စာသားအလွတ်
User.setProperty("u_location", "", "string");    // စာသားအလွတ်
User.setProperty("u_about", "", "string");       // စာသားအလွတ်
User.setProperty("u_photos", [], "json");        // Array အလွတ် (ဒါက အရေးကြီးဆုံးပါ)

// ၂။ အချက်ပေးစာသားလေး တစ်ခုလောက်ပြလိုက်ရင် ပိုကောင်းပါတယ်
Bot.sendMessage("🔄 မောင့်ရဲ့ Profile အဟောင်းတွေကို ဖျက်လိုက်ပါပြီ။ အစကနေ ပြန်ဆောက်ရအောင်နော်...");

// ၃။ Profile ပြန်ဆောက်သည့် အဆင့်သို့ သွားခြင်း
Bot.runCommand("👤 Profile ဆောက်မည်");

