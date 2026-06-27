// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCO6wt9IIkCWF7BdaTtDtHwl2BwNGWMiF0",
  authDomain: "rajib-top-up-house-bcb4e.firebaseapp.com",
  projectId: "rajib-top-up-house-bcb4e",
  storageBucket: "rajib-top-up-house-bcb4e.firebasestorage.app",
  messagingSenderId: "132908919579",
  appId: "1:132908919579:web:5afdc380d0fcb170a981be",
  measurementId: "G-Z8N94RRSDE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Google Login
function googleLogin() {
  auth.signInWithPopup(provider)
    .then((result) => {
      alert("Welcome " + result.user.displayName);
      window.location.href = "profile.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Logout
function logout() {
  auth.signOut()
    .then(() => {
      alert("Logout Successful");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

// Check Login Status
auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log("Logged in:", user.displayName);

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userPhoto = document.getElementById("userPhoto");

    if (userName) userName.innerHTML = user.displayName;
    if (userEmail) userEmail.innerHTML = user.email;
    if (userPhoto) userPhoto.src = user.photoURL;

  } else {
    console.log("No user logged in");
  }
});
