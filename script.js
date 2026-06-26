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
