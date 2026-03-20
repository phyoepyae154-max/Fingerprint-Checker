/*CMD
  command: /add
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
  command: /add
  need_reply: false
CMD*/

// ၁။ Admin စစ်ဆေးခြင်း
var admin_id = "1981611974";
if (user.telegramid != admin_id) {
  Bot.sendMessage("❌ <b>Master! သင်သည် Admin မဟုတ်ပါ။</b>", { parse_mode: "HTML" });
  return;
}

// ၂။ Parameter စစ်ဆေးခြင်း (/add [userid] [amount])
if (!params) {
  Bot.sendMessage("💡 <b>အသုံးပြုပုံ •</b> <code>/add [User_ID] [Points]</code>\n\nဥပမာ - <code>/add 1981611974 50</code>", { parse_mode: "HTML" });
  return;
}

var parts = params.split(" ");
var target_id = parts[0];
var amount = parseInt(parts[1]);

if (isNaN(amount)) {
  Bot.sendMessage("⚠️ <b>Point အရေအတွက်ကို ဂဏန်းဖြင့်သာ ထည့်ပါ။</b>", { parse_mode: "HTML" });
  return;
}

// ၃။ Target User ရဲ့ Point ကို ရှာပြီး ပေါင်းထည့်ခြင်း
var target_points = Libs.ResourcesLib.anotherUserRes("points", target_id);
target_points.add(amount);

// ၄။ Admin ထံ အကြောင်းကြားစာပို့ခြင်း
Bot.sendMessage("✅ <b>Point ထည့်သွင်းမှု အောင်မြင်သည်။</b>\n━━━━━━━━━━━━\n👤 <b>User •</b> <code>" + target_id + "</code>\n💰 <b>အရေအတွက် •</b> <code>" + amount + " Pts</code>", { parse_mode: "HTML" });

// ၅။ User ထံ အကြောင်းကြားစာပို့ခြင်း
var user_msg = "🎁 <b>Admin မှ သင့်ထံ Point များ ပေးပို့လိုက်သည်။</b>\n━━━━━━━━━━━━\n💰 <b>ရရှိသည့်ပမာဏ •</b> <code>" + amount + " Pts</code>\n💳 <b>လက်ရှိစုစုပေါင်း •</b> <code>" + target_points.value() + " Pts</code>";

Api.sendMessage({
  chat_id: target_id,
  text: user_msg,
  parse_mode: "HTML"
});

