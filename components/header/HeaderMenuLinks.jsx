import Link from "next/link";
import MenuLinks from "../../constants/MenuLinks";
import QueryModal from "../query/QueryModal";
import globalStyles from "../shared/Shared.module.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
function HeaderMenuLinks() {
  const SwalModal = withReactContent(Swal);
  const OpenQuery = () => {
    SwalModal.fire({
      html: <QueryModal />,
      showConfirmButton: false,
      customClass: "chatmodal",
    });
  };

  return MenuLinks.map((item, index) => {
    if (item?.name === "Query") {
      return (
        <a
          onClick={OpenQuery}
          className={`${globalStyles.uppercase} ${globalStyles.black} ${globalStyles.fontSize_15} ${globalStyles.fontBold} ${globalStyles.fontBold} ${globalStyles.mr_40}`}
        >
          {item.name}
        </a>
      );
    } else {
      return (
        <Link href={item.link} key={index}>
          <a
            className={`${globalStyles.uppercase} ${globalStyles.black} ${globalStyles.fontSize_15} ${globalStyles.fontBold} ${globalStyles.fontBold} ${globalStyles.mr_40}`}
          >
            {item.name}
          </a>
        </Link>
      );
    }
  });
}

export default HeaderMenuLinks;
