// // Scripts for firebase and firebase messaging
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// // Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: "AIzaSyDYRy_ggdercsN2hHQ-gmNTu8AhV_mmsq0",
//   authDomain: "aire-8d049.firebaseapp.com",
//   projectId: "aire-8d049",
//   storageBucket: "aire-8d049.appspot.com",
//   messagingSenderId: "173177312463",
//   appId: "1:173177312463:web:cffa758fd81c058e4093ba",
//   measurementId: "G-RM0LE5PLKQ",
// };

// firebase.initializeApp(firebaseConfig);

// // Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//   console.log("Received background message ", payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
