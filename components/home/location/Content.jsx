import { useEffect } from "react";
import { useState } from "react";
import globalStyles from "../../shared/Shared.module.scss";
import localStyles from "./Location.module.scss";
function Content() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timerId = setInterval(() => {
      switch (count) {
        case 1:
          document.querySelectorAll(".locationtab h2")[0].style.color =
            "#003F9A";
          document.querySelectorAll(
            ".locationtab .locationtab_circle"
          )[0].style.backgroundColor = "#003F9A";
          document.querySelectorAll(".locationtab h4")[0].style.color =
            "#ffffff";
          setCount((prev) => prev + 1);

          break;
        case 2:
          document.querySelectorAll(".locationtab h2")[1].style.color =
            "#003F9A";
          document.querySelectorAll(
            ".locationtab .locationtab_circle"
          )[1].style.backgroundColor = "#003F9A";
          document.querySelectorAll(".locationtab h4")[1].style.color =
            "#ffffff";

          setCount((prev) => prev + 1);

          break;
        case 3:
          document.querySelectorAll(".locationtab h2")[2].style.color =
            "#003F9A";
          document.querySelectorAll(
            ".locationtab .locationtab_circle"
          )[2].style.backgroundColor = "#003F9A";
          document.querySelectorAll(".locationtab h4")[2].style.color =
            "#ffffff";
          setCount((prev) => prev + 1);

          break;
        case 4:
          document.querySelectorAll(".locationtab h2")[3].style.color =
            "#003F9A";
          document.querySelectorAll(
            ".locationtab .locationtab_circle"
          )[3].style.backgroundColor = "#003F9A";
          document.querySelectorAll(".locationtab h4")[3].style.color =
            "#ffffff";
          setCount((prev) => prev + 1);
          break;
        case 5:
          document.querySelectorAll(".locationtab h2").forEach((item) => {
            item.style.color = "#1E1E1E";
          });
          document
            .querySelectorAll(".locationtab .locationtab_circle")
            .forEach((item) => {
              item.style.backgroundColor = "#F4F3F8";
            });
          document.querySelectorAll(".locationtab h4").forEach((item) => {
            item.style.color = "#69696B";
          });

          setCount(1);
          break;
        default:
          break;
      }
    }, 2000);

    return () => clearInterval(timerId);
  });
  return (
    <div className={`${globalStyles.locationtabs}`}>
      <div
        className={`${globalStyles.flex} ${globalStyles.pb_40} ${localStyles.locationtab} locationtab`}
      >
        <div
          className={`${globalStyles.borderRadius_50}  ${globalStyles.width_50} ${globalStyles.culturedbackground} ${globalStyles.height_50} ${globalStyles.height_sm_50} ${globalStyles.width_sm_50}   ${globalStyles.fontMedium} ${globalStyles.fontSize_25} ${globalStyles.cloudygrey} ${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyCenter} ${globalStyles.mr_50} ${globalStyles.mr_sm_30} ${globalStyles.fontSize_sm_20}  locationtab_circle    `}
        >
          <h4>1</h4>
        </div>
        <div>
          <h2
            className={`${globalStyles.fontSize_35} ${globalStyles.fontSize_sm_25} ${globalStyles.fontBlack} ${globalStyles.mb_10} ${globalStyles.swalt}`}
          >
            INPUT RESIDENTIAL ADDRESS
          </h2>
          <p
            className={`${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.cloudygrey}`}
          >
            We will connect the nearest available technician to your location
          </p>
        </div>
      </div>
      <div
        className={`${globalStyles.flex} ${globalStyles.pb_40} ${localStyles.locationtab} locationtab`}
      >
        <div
          className={`${globalStyles.borderRadius_50}  ${globalStyles.width_50} ${globalStyles.culturedbackground} ${globalStyles.height_50} ${globalStyles.height_sm_50} ${globalStyles.width_sm_50}   ${globalStyles.fontMedium} ${globalStyles.fontSize_25} ${globalStyles.cloudygrey} ${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyCenter} ${globalStyles.mr_50} ${globalStyles.mr_sm_30}  ${globalStyles.fontSize_sm_20}  locationtab_circle    `}
        >
          <h4>2</h4>
        </div>
        <div>
          <h2
            className={`${globalStyles.fontSize_35} ${globalStyles.fontSize_sm_25} ${globalStyles.fontBlack} ${globalStyles.mb_10} ${globalStyles.swalt}`}
          >
            START BOOKING
          </h2>
          <p
            className={`${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.cloudygrey}`}
          >
            It is a long established fact that a reader
          </p>
        </div>
      </div>
      <div
        className={`${globalStyles.flex}  ${globalStyles.pb_40}  ${localStyles.locationtab} locationtab`}
      >
        <div
          className={`${globalStyles.borderRadius_50}  ${globalStyles.width_50} ${globalStyles.culturedbackground} ${globalStyles.height_50} ${globalStyles.height_sm_50} ${globalStyles.width_sm_50}   ${globalStyles.fontMedium} ${globalStyles.fontSize_25} ${globalStyles.cloudygrey} ${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyCenter} ${globalStyles.mr_50} ${globalStyles.mr_sm_30} ${globalStyles.fontSize_sm_20}  locationtab_circle     `}
        >
          <h4>3</h4>
        </div>
        <div>
          <h2
            className={`${globalStyles.fontSize_35} ${globalStyles.fontSize_sm_25}  ${globalStyles.fontBlack} ${globalStyles.mb_10} ${globalStyles.swalt}`}
          >
            SELECT SERVICE
          </h2>
          <p
            className={`${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.cloudygrey}`}
          >
            Choose between maintenance or Service if you're not currently
            cooling. or if unit is leaking.
          </p>
        </div>
      </div>
      <div
        className={`${globalStyles.flex} ${localStyles.locationtab} locationtab`}
      >
        <div
          className={`${globalStyles.borderRadius_50}  ${globalStyles.width_50} ${globalStyles.culturedbackground} ${globalStyles.height_50} ${globalStyles.height_sm_50} ${globalStyles.width_sm_50}   ${globalStyles.fontMedium} ${globalStyles.fontSize_25} ${globalStyles.cloudygrey} ${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyCenter} ${globalStyles.mr_50} ${globalStyles.mr_sm_30} ${globalStyles.fontSize_sm_20}  locationtab_circle    `}
        >
          <h4>4</h4>
        </div>
        <div>
          <h2
            className={`${globalStyles.fontSize_35} ${globalStyles.fontSize_sm_25} ${globalStyles.fontBlack} ${globalStyles.mb_10} ${globalStyles.swalt}`}
          >
            BOOK TECHNICIAN
          </h2>
          <p
            className={`${globalStyles.fontSize_18} ${globalStyles.fontRegular} ${globalStyles.cloudygrey}`}
          >
            booking will be sent to nearest available technician, once booking
            is accepted you can see technician live heading to your location.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
