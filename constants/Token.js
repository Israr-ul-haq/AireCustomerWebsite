import { getMessaging, getToken } from "firebase/messaging";
import { firebaseConfig, db } from "./Firebase";

// const messaging = getMessaging();

// export const requestForToken = () => {
//   return getToken(messaging, {
//     vapidKey:
//       "BGE1lXewCnm0F3V8dI_yJWXexhhfGU4MWaxLeIXrRUQZYbWf_iB93UmNoKpKVQFfefKuYw9jMt6TJStqAJAPSt4",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//         // Perform any other neccessary action with the token
//       } else {
//         // Show permission request UI
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//     });
// };
