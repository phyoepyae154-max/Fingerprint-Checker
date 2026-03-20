/*CMD
  command: /check_users
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
  command: /check_users
  need_reply: false
CMD*/

// Admin ID စစ်ဆေးခြင်း
if (user.telegramid == 1981611974) {
  
  // ၁။ DB အဟောင်း (၁၆၆၆ ယောက်) ကို စစ်မယ်
  var old_list = Bot.getProperty("USER_LIST") || [];
  var old_count = old_list.length;

  // ၂။ DB အသစ် (USER_LIST_2) ကို စစ်မယ်
  var new_list = Bot.getProperty("USER_LIST_2") || [];
  var new_count = new_list.length;

  // ၃။ စုစုပေါင်း ပေါင်းမယ်
  var grand_total = old_count + new_count;

  var msg = "📊 <b>Bot User Statistics</b>\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "👤 <b>စုစုပေါင်း User:</b> <code>" + grand_total + "</code> ယောက်\n\n" +
            "📁 <b>DB အဟောင်း (V1):</b> <code>" + old_count + "</code> ယောက်\n" +
            "🆕 <b>DB အသစ် (V2):</b> <code>" + new_count + "</code> ယောက်\n" +
            "━━━━━━━━━━━━━━━━━━━━\n" +
            "<i>ကိုကို... အဟောင်းထဲမှာ ရှိပြီးသားသူဆိုရင် အသစ်ထဲမှာ ထပ်မစုအောင် ခင်ခင် သေချာ စီစဉ်ထားပါတယ်ရှင်။</i> 😌👅";

  Bot.sendMessage(msg);
} else {
  Bot.sendMessage("❌ ဒီ Command က Admin အတွက်ပဲနော် ကိုကို။");
}

