import Image from "next/image";
import Calender from "../../../assets/images/home/calendar.svg";
import styles from "./Hero.module.scss";
import Link from "next/link";
import BookCalendar from "./BookCalendar";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/router";

function CalenderButton({ values }) {
  const router = useRouter();
  const SwalModal = withReactContent(Swal);

  const OpenBookedModal = () => {
    if (values === null) {
      const booknowbtn = document.getElementById("booknowbutton");

      booknowbtn.click();

      return;
    }
    SwalModal.fire({
      html: <BookCalendar swal={SwalModal} router={router} />,
      showConfirmButton: false,
      customClass: "bookcalander",
    });
  };
  return (
    <div onClick={OpenBookedModal} className={`${styles.calender}`}>
      <Image src={Calender} alt="calender" />
    </div>
  );
}

export default CalenderButton;
