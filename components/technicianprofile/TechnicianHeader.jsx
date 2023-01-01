import globalStyles from "../shared/Shared.module.scss";
import styles from "./TechnicianProfile.module.scss";
import Button from "../shared/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Chat from "./Chat";
import { initializeApp } from "firebase/app";
import moment from "moment";
import {
  collection as fireStoreCollectione,
  query as fireStoreQuery,
  where as fireStoreWhere,
  getDocs as fireStoreDocs,
  onSnapshot,
  doc,
  QuerySnapshot,
  getFirestore,
  serverTimestamp,
  addDoc,
  orderBy,
  Firestore,
  Timestamp,
} from "firebase/firestore";
import { db, firebaseConfig } from "../../constants/Firebase";
import { v4 as uuidv4 } from "uuid";
function TechnicianHeader() {
  const SwalModal = withReactContent(Swal);
  const appNew = initializeApp(firebaseConfig);
  const dbNew = getFirestore(appNew);

  const OpenChat = async () => {
    const roomsCol = fireStoreQuery(
      fireStoreCollectione(dbNew, "Users"),
      fireStoreWhere(
        "email",
        "==",
        JSON.parse(localStorage.getItem("aireuser")).user.email
      )
    );
    const roomsSnapshot = await fireStoreDocs(roomsCol);
    const roomsList = roomsSnapshot.docs.map((doc) => doc.data());
    sessionStorage.setItem("userId", roomsList[0].id);
    console.log(roomsList[0].id);

    const roomsCol1 = fireStoreQuery(
      fireStoreCollectione(dbNew, "Users"),
      fireStoreWhere(
        "email",
        "==",
        JSON.parse(localStorage.getItem("AireTechnician")).TechnicianEmail
      )
    );
    const roomsSnapshot1 = await fireStoreDocs(roomsCol1);
    const roomsList1 = roomsSnapshot1.docs.map((doc) => doc.data());
    sessionStorage.setItem("techId", roomsList1[0].id);
    console.log(roomsList1[0].id);
    const roomsCol2 = fireStoreQuery(
      fireStoreCollectione(dbNew, "ChatRooms"),
      fireStoreWhere("userIds", "array-contains-any", [
        sessionStorage.getItem("userId"),
      ])
    );
    const roomsSnapshot2 = await fireStoreDocs(roomsCol2);
    const roomsList2 = roomsSnapshot2.docs.map((doc) => doc.data());

    const roomLIstGet2 = roomsList2.filter((item) => {
      return item.userIds.includes(sessionStorage.getItem("techId"));
    });

    // async function getUser(db) {
    //   ;
    // }

    console.log(roomLIstGet2);
    const date = Timestamp.now();
    if (!roomLIstGet2.length) {
      await addDoc(fireStoreCollectione(dbNew, "ChatRooms"), {
        id: uuidv4(),
        lastmessage: "",
        lastmessages: "",
        timeStampOfLastMessage: date,
        userIds: [
          sessionStorage.getItem("userId"),
          sessionStorage.getItem("techId"),
        ],
      });
    }
    SwalModal.fire({
      html: <Chat />,
      showConfirmButton: false,
      customClass: "chatmodal",
    });
  };

  return (
    <div
      className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_md} ${globalStyles.flexColumn_md} `}
    >
      <div className={`${styles.headercontent} ${globalStyles.mb_md_20} `}>
        <h5
          className={`${globalStyles.smalt} ${globalStyles.fontSize_18} ${globalStyles.fontBold} ${globalStyles.mb_10}`}
        >
          SERVICES
        </h5>
        <h1
          className={`${globalStyles.nero} ${globalStyles.fontSize_35} ${globalStyles.fontSize_lg_35} ${globalStyles.fontSize_sm_30} ${globalStyles.black} `}
        >
          YOUR TECHNICIAN ON HIS WAY.
        </h1>
      </div>
      <div onClick={OpenChat}>
        <Button
          height="50px"
          width="210px"
          maxWidth="385px"
          text="CHAT WITH TECHNICIAN"
          fontWeight="700"
          fontSize={"15px"}
          borderRadius="26px"
          textTransform={"uppercase"}
          margin="0"
          btnStyle="outline"
        />
      </div>
    </div>
  );
}

export default TechnicianHeader;
