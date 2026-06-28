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
  auth.signInWithRedirect(provider);
}

// Redirect থেকে ফিরে আসার পর Login Status
auth.getRedirectResult()
  .then((result) => {
    if (result.user) {
      alert("Login Successful: " + result.user.displayName);
      window.location.href = "profile.html";
    }
  })
  .catch((error) => {
    alert(error.message);
  });

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

// Login Status
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("Logged in:", user.displayName);
  } else {
    console.log("No user logged in");
  }
});
