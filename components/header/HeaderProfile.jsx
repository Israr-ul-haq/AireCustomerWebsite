import styles from "./Header.module.scss";
import globalStyles from "../shared/Shared.module.scss";
import useDropdownMenu from "react-accessible-dropdown-menu-hook";
import Link from "next/link";

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
function HeaderProfile() {
  const { buttonProps, itemProps, isOpen } = useDropdownMenu(2);
  const [btnCount, setBtnCount] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    if (btnCount === 0) {
      const localdata = JSON.parse(localStorage.getItem("aireuser"));
      setData(localdata?.user);
      setBtnCount(1);
    }
  }, [data, btnCount]);

  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("aireuser");
    localStorage.removeItem("AireTechnician");
    localStorage.removeItem("AireTechnicianId");
    localStorage.removeItem("AireTechnician1");
    localStorage.removeItem("orderId");
    localStorage.removeItem("totalAmount");
    router.push("/login");
  };
  return (
    <div className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}`}>
      <div
        style={{
          borderRadius: "50%",
          position: "relative",
          width: "50px",
          height: "50px",
        }}
      >
        <img
          src={data?.profilePicPath ? data?.profilePicPath : ""}
          alt="aire logo"
          style={{
            width: "50px",
            height: "50px",
            layout: "fill",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      </div>
      <button
        {...buttonProps}
        className={styles.profilecontent}
        style={{ border: "none", borderRadius: "22px", cursor: "pointer" }}
      >
        <h3
          style={{
            width: "160px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginleft: "25px",
          }}
          className={`${globalStyles.black} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}`}
        >
          {data?.firstName} {data?.lastName}
        </h3>
      </button>
      <div
        className={isOpen ? "visible headerprofilemenu" : "headerprofilemenu"}
        role="menu"
      >
        <Link passHref href={"/profile"}>
          <a {...itemProps[0]}>Profile</a>
        </Link>

        <a {...itemProps[1]} onClick={logout}>
          Logout
        </a>
      </div>
    </div>
  );
}

export default HeaderProfile;
