import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "live-chat-a7176.firebaseapp.com",
  projectId: "live-chat-a7176",
  storageBucket: "live-chat-a7176.appspot.com",
  messagingSenderId: "1004182430654",
  appId: "1:1004182430654:web:9dd64a462e328194494fef",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);
//retrieve collection data
// cityDb.teams.forEach(async (item) => {
//   try {
//     const docRef = await addDoc(collection(db, "teams"), {
//       item,
//     });

//     console.log(docRef.id);
//   } catch (error) {
//     console.log(error);
//   }
// });

//Authenfication
export const logout = async () => {
  await auth.signOut();
};

export const signIn = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};
