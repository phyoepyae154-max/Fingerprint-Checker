/*CMD
  command: /inc_profile_views
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
  command: /inc_profile_views
*/

let current = User.getProperty("p_views", 0);
let max_view = 300; // ကိုကိုသတ်မှတ်ချင်တဲ့ အများဆုံး View

if (current < max_view) {
  let inc = Math.floor(Math.random() * 3) + 1; // တစ်ခါတိုးရင် ၁ ကနေ ၃ ထိ တိုးမယ်
  User.setProperty("p_views", current + inc, "integer");
}

// ထပ်တိုးဖို့ Loop ပြန်ပတ်မယ်
let next_wait = Math.floor(Math.random() * (600 - 180 + 1)) + 180;
Bot.run({ command: "/inc_profile_views", run_after: next_wait });

