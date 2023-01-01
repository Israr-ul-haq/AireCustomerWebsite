// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDYRy_ggdercsN2hHQ-gmNTu8AhV_mmsq0",
  authDomain: "aire-8d049.firebaseapp.com",
  projectId: "aire-8d049",
  storageBucket: "aire-8d049.appspot.com",
  messagingSenderId: "173177312463",
  appId: "1:173177312463:web:cffa758fd81c058e4093ba",
  measurementId: "G-RM0LE5PLKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const messaging = getMessaging(app);

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload", payload);
//       resolve(payload);
//     });
//   });
