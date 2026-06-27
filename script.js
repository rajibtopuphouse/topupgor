function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("অনুগ্রহ করে ইমেইল ও পাসওয়ার্ড লিখুন।");
    return;
  }

  alert("Login সফল হয়েছে (ডেমো)।");
  window.location.href = "index.html";
}

function googleLogin() {
  alert("Google Login ফিচার যোগ করতে Firebase সেটআপ করতে হবে।");
}
function submitOrder() {
    const uid = document.getElementById("uid").value;
    const pack = document.getElementById("package").value;
    const trx = document.getElementById("trx").value;

    if (uid === "" || trx === "") {
        alert("UID এবং Transaction ID লিখুন");
        return;
    }

    const message =
`🎮 Rajib Top-Up House

🆔 UID: ${uid}
💎 Package: ${pack}
💳 Transaction ID: ${trx}`;

    const url = "https://wa.me/8801788655205?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
}
