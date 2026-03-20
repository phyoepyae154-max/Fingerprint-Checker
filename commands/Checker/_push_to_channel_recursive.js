/*CMD
  command: /push_to_channel_recursive
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
  command: /push_to_channel_recursive
  need_reply: false
CMD*/

// params ကို options ထဲကနေ တိုက်ရိုက်ဆွဲထုတ်မယ်
var p = options ? options.params : null;
if (!p) { return; }

var index = parseInt(p);
var db1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db2 = Bot.getProperty("DB_FREE_PHOTO2") || [];
var all_photos = db1.concat(db2);
var channel = "@tonecreators";

if (index < all_photos.length) {
  var photo = all_photos[index];
  
  Api.sendPhoto({
    chat_id: channel,
    photo: photo.file_id,
    caption: "🆔 <b>ID: " + (index + 1) + " / " + all_photos.length + "</b>",
    parse_mode: "HTML"
  });

  // နောက်တစ်ပုံအတွက် index ကို တိုးပြီး ပြန်ခေါ်မယ်
  var next_index = (index + 1).toString();
  
  Bot.run({
    command: "/push_to_channel_recursive",
    run_after: 0.7, // 0.7s delay
    options: { params: next_index }
  });
} else {
  Bot.sendMessage("✅ <b>ပုံအားလုံး Channel ထဲ တင်ပြီးပါပြီ Master။</b>", { parse_mode: "HTML" });
}

