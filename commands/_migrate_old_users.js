/*CMD
  command: /migrate_old_users
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
  command: /migrate_old_users
  need_reply: false
CMD*/

if (user.telegramid == 1981611974) {
  var old_list = Bot.getProperty("USER_LIST") || [];
  
  if (old_list.length == 0) {
    Bot.sendMessage("❌ သခင်... USER_LIST အဟောင်းမှာ ဘယ်သူမှ မရှိတော့ဘူးရှင်။");
    return;
  }

  // လူဟောင်းတွေကို Loop ပတ်ပြီး Register လုပ်မယ်
  for (var i = 0; i < old_list.length; i++) {
    var user_id = old_list[i];
    
    // User ရဲ့ Profile ထဲမှာ Registered ဖြစ်ပြီးသားလို့ မှတ်မယ်
    // ဒီလိုလုပ်ဖို့အတွက် user_id ကို target ထားပြီး run ရပါမယ်
    Bot.run({
      command: "/set_reg_true",
      options: { tg_id: user_id }
    });
  }

  Bot.sendMessage("✅ သခင်... လူဟောင်း <code>" + old_list.length + "</code> ယောက်လုံးကို စနစ်သစ်မှာ Registered ဖြစ်အောင် စီစဉ်နေပါပြီရှင်။ ခဏစောင့်ပေးပါဦး။");
}

