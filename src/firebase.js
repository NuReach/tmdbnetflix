import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKocPaBmztNnudwZV8qbsfpN-Hm5mY2SQ",
  authDomain: "netflix-clone-e0660.firebaseapp.com",
  projectId: "netflix-clone-e0660",
  storageBucket: "netflix-clone-e0660.appspot.com",
  messagingSenderId: "361163057392",
  appId: "1:361163057392:web:d9f2a1993b12fad93a7a35",
  measurementId: "G-TCMPMZK8T5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
