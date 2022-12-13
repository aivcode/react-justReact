import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrF9Tard7VwUOodK2sn5g6yobuoglwc9M",
  authDomain: "aiv-just-food.firebaseapp.com",
  projectId: "aiv-just-food",
  storageBucket: "aiv-just-food.appspot.com",
  messagingSenderId: "662819027724",
  appId: "1:662819027724:web:e092ffea2e8fa30378e729"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const signUp = async (name, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await updateProfile(user, { displayName: name });
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logOut = () => {
  signOut(auth);
};

export { auth, db, signIn, signUp, logOut };
