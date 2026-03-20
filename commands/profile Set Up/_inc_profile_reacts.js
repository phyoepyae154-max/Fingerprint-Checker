/*CMD
  command: /inc_profile_reacts
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
  command: /inc_profile_reacts
*/

let current = User.getProperty("p_reacts", 0);
let max_react = 50; // ကိုကိုသတ်မှတ်ချင်တဲ့ အများဆုံး Love

if (current < max_react) {
  let inc = Math.floor(Math.random() * 2) + 1; // တစ်ခါတိုးရင် ၁ ကနေ ၂ ထိ တိုးမယ်
  User.setProperty("p_reacts", current + inc, "integer");
}

// ထပ်တိုးဖို့ Loop ပြန်ပတ်မယ်
let next_wait = Math.floor(Math.random() * (10800 - 3600 + 1)) + 3600;
Bot.run({ command: "/inc_profile_reacts", run_after: next_wait });

