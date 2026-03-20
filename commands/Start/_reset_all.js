/*CMD
  command: /reset_all
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
  command: /reset_all
  admin: true
CMD*/

// ၁။ Profile Database တွေကို အကုန်ဖျက်မယ်
Bot.setProperty("DB_FREE_TEXT", [], "json");
Bot.setProperty("DB_FREE_PHOTO", [], "json");

// ၂။ Permanent Star Rates တွေကို အကုန်ဖျက်မယ်
Bot.setProperty("PERMANENT_RATES", {}, "json");

// ၃။ User တွေရဲ့ ကြည့်ရှုမှုမှတ်တမ်း (Seen List) နဲ့ Limit (View Count) ကို ရှင်းမယ်
// (ဒါက လက်ရှိ Admin ရဲ့ မှတ်တမ်းကိုပဲ ချက်ချင်းရှင်းတာပါ)
User.setProperty("seen_free", [], "json");
User.setProperty("profile_view_count", 0, "integer");

Bot.sendMessage("🔥 <b>Database အားလုံးကို အစအဆုံး Reset လုပ်ပြီးပါပြီ Master!</b>\n\n- Profiles: 0\n- Star Rates: Cleaned\n- Your View History: Resetted", { parse_mode: "HTML" });

