import globalStyles from "../shared/Shared.module.scss";
import ChatFooter from "./ChatFooter";
import styles from "./TechnicianProfile.module.scss";
import ChatHeader from "./ChatHeader";
import ChatImage from "../../assets/images/chat/Send.svg";
import ChatMessages from "./ChatMessages";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import {
  collection as fireStoreCollectione,
  query as fireStoreQuery,
  where as fireStoreWhere,
  getDocs as fireStoreDocs,
  onSnapshot,
  doc,
  QuerySnapshot,
  getFirestore,
  addDoc,
  orderBy,
  Firestore,
  Timestamp,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";
import { db, firebaseConfig } from "../../constants/Firebase";
import { useEffect, useState } from "react";
import ChatUsersMessages from "./ChatUsersMessage";
import moment from "moment";
function Chat() {
  const appNew = initializeApp(firebaseConfig);
  const dbNew = getFirestore(appNew);
  const [loader, setLoader] = useState(true);
  const [roomId, setRoomId] = useState("");
  const [messages, setMessages] = useState([]);
  const [usersMessage, setUsersMessages] = useState([]);
  let [message, setMessage] = useState("");
  const [countUsers, setCountUsers] = useState(0);

  useEffect(() => {
    if (countUsers === 0) {
      getUsers(db);
      getMessages(db);

      setCountUsers(1);
    }
  }, [countUsers]);

  async function getUsers(db) {
    setLoader(true);
    const roomsCol = fireStoreQuery(
      fireStoreCollectione(dbNew, "ChatRooms"),
      fireStoreWhere("userIds", "array-contains-any", [
        sessionStorage.getItem("userId"),
      ])
    );
    const roomsSnapshot = await fireStoreDocs(roomsCol);
    const roomsList = roomsSnapshot.docs.map((doc) => doc.data());

    const roomLIstGet = roomsList.filter((item) => {
      return item.userIds.includes(sessionStorage.getItem("techId"));
    });
    setLoader(false);
    setRoomId(roomLIstGet[0]?.id);
  }

  const getMessages = (data, roomID) => {
    setLoader(true);
    getMessagesData(db);

    async function getMessagesData(db) {
      const messagesCol = fireStoreQuery(
        fireStoreCollectione(dbNew, "Messages"),
        fireStoreWhere("roomId", "==", roomId),
        orderBy("timeStamp", "asc")
      );
      const messagesSnapshot = await fireStoreDocs(messagesCol);
      const messagesList = messagesSnapshot.docs.map((doc) => doc.data());

      let finalMessageList = messagesList.map((item) => {
        var date = new Date(item.timeStamp); // create Date object

        return {
          senderId: item.senderId,
          roomId: item.roomId,
          timeStamp: date,
          message: item.message,
        };
      });
      console.log(messagesList);
      let sortedDates = finalMessageList.sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.

        return new Date(a.timeStamp) - new Date(b.timeStamp);
      });

      let reversedArray = sortedDates.reverse();

      setLoader(false);
      setMessages([...reversedArray]);
    }
  };

  useEffect(() => {
    if (roomId !== undefined) {
      const q = fireStoreQuery(
        fireStoreCollectione(dbNew, "Messages"),
        fireStoreWhere("roomId", "==", roomId),
        orderBy("timeStamp", "asc")
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        setLoader(true);
        const messaages = [];
        querySnapshot.forEach((doc) => {
          messaages.push({
            message: doc.data().message,
            roomId: doc.data().roomId,
            senderId: doc.data().senderId,
            timeStamp: moment.unix(doc.data().timeStamp / 1000).format("LT"),
            // timeStamp: doc.data().timeStamp,
          });
        });
        let sortedDates = messaages.sort(function (a, b) {
          // Turn your strings into dates, and then subtract them
          // to get a value that is either negative, positive, or zero.

          return b.timeStamp > a.timeStamp;
        });

        setMessages(sortedDates);

        setLoader(false);
      });
    }
  }, [dbNew, roomId]);

  const serverTime = Timestamp.now();
  // const serverTime = serverTimestamp(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    // let dss = JSON.stringify(serverTimestamp());
    await addDoc(fireStoreCollectione(dbNew, "Messages"), {
      message: message,
      roomId: roomId,
      senderId: sessionStorage.getItem("userId"),
      timeStamp: JSON.stringify(serverTime.seconds * 1000),
    });
    message = "";
    document.querySelector(".chat_input").value = "";
  };

  return (
    <div
      className={`${globalStyles.pb_25} ${globalStyles.pt_25} ${globalStyles.pr_25} ${globalStyles.pl_25}`}
    >
      <ChatHeader />
      <div className={`${styles.chatmessagecontainer} chat_div`}>
        {messages.map((item) => {
          return (
            <>
              {item.senderId === sessionStorage.getItem("userId") ? (
                <ChatUsersMessages item={item} />
              ) : (
                <ChatMessages item={item} />
              )}
            </>
          );
        })}
      </div>

      <form
        style={{
          position: "relative",
        }}
        onSubmit={handleSubmit}
      >
        <input
          className={`${styles.chatinput} chat_input`}
          placeholder="Type Something"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          style={{
            width: "15px",
            height: "15px",
            position: "absolute",
            top: "50%",
            right: "15px",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            padding: 0,
          }}
          type="submit"
        >
          <Image alt="send" src={ChatImage} layout="responsive" />
        </button>
      </form>
    </div>
  );
}

export default Chat;
