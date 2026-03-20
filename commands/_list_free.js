/*CMD
  command: /list_free
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
  command: /list_free
  need_reply: false
  admin: true
CMD*/

var index = params ? parseInt(params) : 0;
var db1 = Bot.getProperty("DB_FREE_PHOTO1") || [];
var db2 = Bot.getProperty("DB_FREE_PHOTO2") || [];
var all_photos = db1.concat(db2);

if (all_photos.length == 0) {
  Bot.sendMessage("📭 <b>DB ထဲမှာ ပုံမရှိပါဘူး Master။</b>", { parse_mode: "HTML" });
  return;
}

// Index range စစ်မယ်
if (index < 0) { index = 0; }
if (index >= all_photos.length) { index = all_photos.length - 1; }

var photo = all_photos[index];
var total = all_photos.length;

var buttons = [
  [
    { text: "⬅️ ရှေ့သို့", callback_data: "/list_free " + (index - 1) },
    { text: "🗑️ ဖျက်မည်", callback_data: "/del_free_btn " + index },
    { text: "နောက်သို့ ➡️", callback_data: "/list_free " + (index + 1) }
  ]
];

if (index <= 0) { buttons[0].shift(); }
if (index >= total - 1) { buttons[0].pop(); }

var msg = "🖼️ <b>Profile Viewer</b>\n\n📊 ပုံနံပါတ်: <code>" + (index + 1) + " / " + total + "</code>";

// အမြဲတမ်း အသစ်ပဲ ပို့မယ် (Edit လုပ်ရင် Error တက်နိုင်လို့)
// အရှေ့က Message ဟောင်းကိုတော့ ဖျက်ပစ်မယ်
if (request && request.message) {
  Api.deleteMessage({ message_id: request.message.message_id });
}

Api.sendPhoto({
  photo: photo.file_id,
  caption: msg,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
});

