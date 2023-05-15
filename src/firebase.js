import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQQtxhmDg23wBrsOCBoQmbOujEH5-KkaU",
  authDomain: "weazel-321a6.firebaseapp.com",
  projectId: "weazel-321a6",
  storageBucket: "weazel-321a6.appspot.com",
  messagingSenderId: "421051763550",
  appId: "1:421051763550:web:3fe01b3299c73d86a2ddcf"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

// detect auth state
onAuthStateChanged(auth, user => {
    if(user != null){
        console.log("logged in");
    }else{
        console.log("No user");
    }
})

