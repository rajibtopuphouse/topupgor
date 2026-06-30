// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi5Bm_uUfCrDeurZVv5WkYZpVtnL1-ZWw",
  authDomain: "rajib-top-up-house.firebaseapp.com",
  projectId: "rajib-top-up-house",
  storageBucket: "rajib-top-up-house.firebasestorage.app",
  messagingSenderId: "388827165878",
  appId: "1:388827165878:web:fa0d9f280f8eeedcde2217"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Authentication
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Google Login
function googleLogin() {
  alert("Login button clicked");
  auth.signInWithRedirect(provider);
}

// Redirect Result
auth.getRedirectResult()
  .then((result) => {
    if (result.user) {
      alert("Login Successful: " + result.user.displayName);
      window.location.href = "profile.html";
    }
  })
  .catch((error) => {
    alert(error.code + "\n" + error.message);
    console.error(error);
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