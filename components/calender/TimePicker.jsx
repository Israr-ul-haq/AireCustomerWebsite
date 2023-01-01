import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ScrollImage from "../../assets/images/calendar/icon_scroll.svg";

function TimePicker() {
  const router = useRouter();
  useEffect(() => {}, []);
  return (
    <div className="timepicker">
      <div
        onClick={(e) => {
          e.stopPropagation();
          document
            .querySelector(".timepicker__hourdropdown")
            .classList.toggle("active");
        }}
        className="timepicker__hourcontainer"
      >
        <span className="timepicker__hour">12</span>
        <div
          style={{
            width: "15px",
            height: "10px",
            marginLeft: "10px",
          }}
        >
          <Image alt="Scroll Arrow" src={ScrollImage} layout="responsive" />
        </div>
        <div className="timepicker__hourdropdown">
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            1
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            2
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            3
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            4
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            5
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            6
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            7
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            8
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            9
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            10
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            11
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__hourdropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__hour").textContent =
                e.target.textContent;
            }}
            className="timepicker__hourdropdownvalue"
          >
            12
          </span>
        </div>
      </div>
      <div className="timepicker__coloncontainer">
        <span>:</span>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          document
            .querySelector(".timepicker__minutedropdown")
            .classList.toggle("active");
        }}
        className="timepicker__minutecontainer"
      >
        <span className="timepicker__minute">12</span>
        <div
          style={{
            width: "15px",
            height: "10px",
            marginLeft: "10px",
          }}
        >
          <Image alt="Scroll Arrow" src={ScrollImage} layout="responsive" />
        </div>
        <div className="timepicker__minutedropdown">
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            1
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            2
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            3
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            4
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            5
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            6
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            7
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            8
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            9
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            10
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            11
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            12
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            13
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            14
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            15
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            16
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            17
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            18
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            19
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            20
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            21
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            22
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            23
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            24
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            25
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            26
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            27
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            28
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            29
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            30
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            31
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            32
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            33
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            34
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            35
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            36
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            37
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            38
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            39
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            40
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            41
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            42
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            43
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            44
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            45
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            46
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            47
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            48
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            49
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            50
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            51
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            52
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            53
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            54
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            55
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            56
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            57
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            58
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__minutedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__minute").textContent =
                e.target.textContent;
            }}
            className="timepicker__minutedropdownvalue"
          >
            59
          </span>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          document
            .querySelector(".timepicker__timemodedropdown")
            .classList.toggle("active");
        }}
        className="timepicker__timemodecontainer"
      >
        <span className="timepicker__timemode">AM</span>
        <div
          style={{
            width: "15px",
            height: "10px",
            marginLeft: "10px",
          }}
        >
          <Image alt="Scroll Arrow" src={ScrollImage} layout="responsive" />
        </div>
        <div className="timepicker__timemodedropdown">
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__timemodedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__timemode").textContent =
                e.target.textContent;
            }}
            className="timepicker__timemodedropdownvalue"
          >
            AM
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              document
                .querySelector(".timepicker__timemodedropdown")
                .classList.remove("active");

              document.querySelector(".timepicker__timemode").textContent =
                e.target.textContent;
            }}
            className="timepicker__timemodedropdownvalue"
          >
            PM
          </span>
        </div>
      </div>
    </div>
  );
}

export default TimePicker;
