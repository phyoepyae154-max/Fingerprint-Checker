/*CMD
  command: /text_free
  help: 
  need_reply: true
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
  command: /text_free
  need_reply: true
  admin: true
CMD*/

if (!message) return;

// "000" နဲ့ Profile တစ်ခုချင်းစီကို ခွဲထုတ်မယ်
var entries = message.split("000");
var new_entries_count = 0;

for (var i = 0; i < entries.length; i++) {
  var parts = entries[i].trim().split("|");
  
  if (parts.length >= 6) {
    var profile = {
      name: parts[0].trim(),
      age: parts[1].trim(),
      city: parts[2].trim(),
      style: parts[3].trim(),
      status: parts[4].trim(),
      about: parts[5].trim()
    };

    // DB 1 မှ 5 အထိ လိုက်စစ်ပြီး နေရာလွတ်တဲ့ဆီ သိမ်းမယ် (Limit: DB တစ်ခုလျှင် 66 ခု)
    var saved = false;
    for (var db_num = 1; db_num <= 5; db_num++) {
      var db_name = "DB_FREE_TEXT" + db_num;
      var current_db = Bot.getProperty(db_name) || [];
      
      if (current_db.length < 64) {
        current_db.push(profile);
        Bot.setProperty(db_name, current_db, "json");
        new_entries_count++;
        saved = true;
        break; 
      }
    }
    
    if (!saved) {
      Bot.sendMessage("⚠️ သတိ- DB အားလုံး (၁ မှ ၅ ထိ) ပြည့်သွားပါပြီ။ နောက်ထပ် သိမ်းဆည်း၍မရတော့ပါ။");
      break;
    }
  }
}

if (new_entries_count > 0) {
  var status_msg = "✅ Profile " + new_entries_count + " ခု သွင်းပြီးပါပြီ သခင်။\n\n📊 DB Status:";
  for (var j = 1; j <= 5; j++) {
    var count = (Bot.getProperty("DB_FREE_TEXT" + j) || []).length;
    status_msg += "\n🔹 DB" + j + ": " + count + " / 66";
  }
  Bot.sendMessage(status_msg);
} else {
  Bot.sendMessage("⚠️ Format မှားနေတယ် သခင်။ အချက်အလက်တစ်ခုချင်းစီကြားမှာ | ခံပေးရပါမယ်။");
}

