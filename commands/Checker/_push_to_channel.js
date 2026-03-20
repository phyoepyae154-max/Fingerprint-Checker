/*CMD
  command: /push_to_channel
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Checker

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*CMD
  command: /push_to_channel
  need_reply: false
  admin: true
CMD*/

var db1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db2 = Bot.getProperty("DB_FREE_PHOTO2") || [];
var all_photos = db1.concat(db2);

if (all_photos.length == 0) {
  Bot.sendMessage("📭 DB ထဲမှာ ပုံမရှိပါဘူး Master။");
  return;
}

Bot.sendMessage("⏳ <b>Channel ထဲ စတင်ပို့ဆောင်နေပါပြီ...</b>", { parse_mode: "HTML" });

// Recursive command ကို အစပြုမယ်
Bot.run({
  command: "/push_to_channel_recursive",
  options: { params: "0" } // options ထဲမှာ ထည့်ပို့တာ ပိုစိတ်ချရပါတယ်
});

