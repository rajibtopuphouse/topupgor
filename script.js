// Rajib Top-Up House - script.js

function submitOrder() {
  const uid = document.getElementById("uid").value.trim();
  const pkg = document.getElementById("package").value;
  const trx = document.getElementById("trx").value.trim();

  if (uid === "") {
    alert("অনুগ্রহ করে আপনার Free Fire UID লিখুন");
    return;
  }

  if (trx === "") {
    alert("অনুগ্রহ করে Transaction ID লিখুন");
    return;
  }

  const message =
`🎮 Rajib Top-Up House

🆔 UID: ${uid}

💎 Package: ${pkg}

💳 Transaction ID: ${trx}

✅ নতুন অর্ডার এসেছে।`;

  const whatsapp =
    "https://wa.me/8801788655205?text=" + encodeURIComponent(message);

  window.open(whatsapp, "_blank");
}

function downloadApp() {
  alert("অ্যাপ শীঘ্রই যুক্ত করা হবে।");
}

function showNotice() {
  alert("Rajib Top-Up House-এ আপনাকে স্বাগতম ❤️");
}

window.onload = function () {
  console.log("Rajib Top-Up House Loaded Successfully");
};
