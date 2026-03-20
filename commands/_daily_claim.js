/*CMD
  command: /daily_claim
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

var last_claim = User.getProperty("last_daily_claim");
var now = new Date();

if (last_claim && (now.getTime() - last_claim < 86400000)) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ မနက်ဖြန်မှ ပြန်လာယူပါ Master!",
    show_alert: true
  });
} else {
  var points = Libs.ResourcesLib.userRes("points");
  points.add(30);
  User.setProperty("last_daily_claim", now.getTime(), "integer");
  
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "✅ 30 Pts ရရှိပါပြီ။",
    show_alert: true
  });
  Bot.runCommand("/start");
}

