import globalStyles from "../shared/Shared.module.scss";
import HistoryImage from "../../assets/images/history/photo_profile.png";
import styles from "./History.module.scss";
import Tabs from "react-tabs/lib/components/Tabs";
import TabList from "react-tabs/lib/components/TabList";
import Tab from "react-tabs/lib/components/Tab";
import TabPanel from "react-tabs/lib/components/TabPanel";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  historyData,
  inprogress,
  schedule,
} from "../ApiServices/HistoryService";
import moment from "moment";
import TechnicianProfile from "../technicianprofile/TechnicianProfile";
import { useRouter } from "next/router";
import Link from "next/link";

function History() {
  const router = useRouter();
  const [scheduleData, setScheduleData] = useState([]);
  const [inProgressData, setInProgressData] = useState([]);
  const [historyData1, setHistoryData1] = useState([]);
  const [btnLock, setBtnLock] = useState(false);
  useEffect(() => {
    (async () => {
      setBtnLock(true);
      const response = await schedule(
        JSON.parse(localStorage.getItem("aireuser")).user.id
      );
      if (response.data.code === 1) {
        setScheduleData(response.data.data);
        setBtnLock(false);
      }
      if (response.data.code === 0) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: response.data.data.message,
          showConfirmButton: true,
          timer: 5000,
        });
        setBtnLock(false);
      }
    })();
  }, []);

  const Inprogress = async () => {
    setBtnLock(true);
    const response = await inprogress(
      JSON.parse(localStorage.getItem("aireuser")).user.id
    );
    if (response.data.code === 1) {
      setInProgressData(response.data.data);
      setBtnLock(false);
    }
    if (response.data.code === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: response.data.data.message,
        showConfirmButton: true,
        timer: 5000,
      });
      setBtnLock(false);
    }
    console.log(response.data.data);
  };
  const History = async () => {
    setBtnLock(true);
    const response = await historyData(
      JSON.parse(localStorage.getItem("aireuser")).user.id
    );
    if (response.data.code === 1) {
      setHistoryData1(response.data.data.completedTasks);
      setBtnLock(false);
    }
    if (response.data.code === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: response.data.data.message,
        showConfirmButton: true,
        timer: 5000,
      });
      setBtnLock(false);
    }
  };
  const NewSchedule = async () => {
    setBtnLock(true);
    const response = await schedule(
      JSON.parse(localStorage.getItem("aireuser")).user.id
    );
    if (response.data.code === 1) {
      setScheduleData(response.data.data);
      setBtnLock(false);
    }
    if (response.data.code === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: response.data.data.message,
        showConfirmButton: true,
        timer: 5000,
      });
      setBtnLock(false);
    }
  };

  const tracking = (data) => {
    router.push(
      {
        pathname: "/technician",
        query: data,
      },
      "/technician"
    );
  };
  return (
    <section
      style={{ backgroundColor: "#F4F3F8" }}
      className={`${globalStyles.fullHeight}  ${globalStyles.pt_40} ${globalStyles.pt_sm_20} ${globalStyles.pb_sm_20} ${globalStyles.pb_35}`}
    >
      <div
        className={`${globalStyles.container} ${globalStyles.fullHeight} ${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.flexJustifyBetween}`}
      >
        <div
          className={styles.container}
          style={{
            boxShadow: "0px 0px 18px #00000014",
            borderRadius: "5px",
            width: "100%",
          }}
        >
          <Tabs className={styles.tabs}>
            <TabList>
              <Tab onClick={NewSchedule}>Scheduled</Tab>
              <Tab onClick={Inprogress}>In Progress</Tab>
              <Tab onClick={History}>History</Tab>
            </TabList>
            <TabPanel>
              {btnLock ? (
                <div
                  className="loader loader_color"
                  style={{ width: "10em", height: "10em" }}
                ></div>
              ) : scheduleData.length === 0 ? (
                <div>
                  <h5
                    className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                  >
                    No Data Found
                  </h5>
                </div>
              ) : (
                scheduleData?.map((item) => {
                  return (
                    <>
                      <div
                        className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
                      >
                        <div
                          className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                        >
                          <div
                            className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                          >
                            <div
                              style={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "55px",
                              }}
                              className={`${globalStyles.mr_10}`}
                            >
                              <img
                                alt="history user"
                                src={
                                  item?.technicianProfilePicPath
                                    ? item?.technicianProfilePicPath
                                    : HistoryImage
                                }
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.content}`}>
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                              >
                                {item?.technicianFirstName +
                                  " " +
                                  item?.technicianMiddleName +
                                  " " +
                                  item.technicianLastName}
                              </h5>
                              <h6
                                className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                              >
                                Scheduled
                              </h6>
                            </div>
                          </div>
                          <div
                            className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                          >
                            <div className={styles.tag}>
                              <h5>{item?.serviceType}</h5>
                            </div>
                            <h5 className={styles.service}>
                              Service No #xyon-04
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                        >
                          <div
                            style={{ margin: 0 }}
                            className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                          >
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33}`}
                            >
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                              >
                                Items
                              </h5>
                              <h6
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                              >
                                2 Compressor
                              </h6>
                            </div>
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33}`}
                            >
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                              >
                                Payment
                              </h5>
                              <h6
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                              >
                                ${item?.totalAmount}
                              </h6>
                            </div>
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                            >
                              <h5
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                              >
                                {moment(item?.startDateTime).format("LT")}
                              </h5>
                              <h5
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                              >
                                {moment(item?.startDateTime).format("L")}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </TabPanel>

            <TabPanel>
              {btnLock ? (
                <div
                  className="loader loader_color"
                  style={{ width: "10em", height: "10em" }}
                ></div>
              ) : inProgressData.length === 0 ? (
                <h5
                  className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                >
                  No Data Found
                </h5>
              ) : (
                inProgressData?.map((item) => {
                  return (
                    <>
                      <div
                        className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
                        onClick={() => tracking(item)}
                      >
                        <div
                          className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop}  `}
                        >
                          <div
                            className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                          >
                            <div
                              style={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "55px",
                              }}
                              className={`${globalStyles.mr_10}`}
                            >
                              <img
                                alt="history user"
                                src={
                                  item?.technicianProfilePicPath
                                    ? item?.technicianProfilePicPath
                                    : HistoryImage
                                }
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.content}`}>
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                              >
                                {item?.technicianFirstName +
                                  " " +
                                  item?.technicianMiddleName +
                                  " " +
                                  item.technicianLastName}
                              </h5>
                              <h6
                                className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                              >
                                {/* {item?.orderType}
                                 */}
                                In Progress
                              </h6>
                            </div>
                          </div>
                          <div
                            className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                          >
                            <div className={styles.tag}>
                              <h5>{item?.serviceType}</h5>
                            </div>
                            <h5 className={styles.service}>
                              Service No #xyon-04
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                        >
                          <div
                            style={{ margin: 0 }}
                            className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                          >
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33}`}
                            >
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}   `}
                              >
                                Items
                              </h5>
                              <h6
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                              >
                                2 Compressor
                              </h6>
                            </div>
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33}`}
                            >
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                              >
                                Payment
                              </h5>
                              <h6
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                              >
                                ${item?.totalAmount}
                              </h6>
                            </div>
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                            >
                              <h5
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                              >
                                {moment(item?.startDateTime).format("LT")}
                              </h5>
                              <h5
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                              >
                                {moment(item?.startDateTime).format("L")}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </TabPanel>

            <TabPanel>
              {btnLock ? (
                <div
                  className="loader loader_color"
                  style={{ width: "10em", height: "10em" }}
                ></div>
              ) : historyData1.length === 0 ? (
                <h5
                  className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                >
                  No Data Found
                </h5>
              ) : (
                historyData1?.map((item) => {
                  return (
                    <>
                      <div
                        className={`${globalStyles.flex} ${globalStyles.fullWidth} ${globalStyles.flexColumn} ${styles.history} ${globalStyles.mb_20} `}
                      >
                        <div
                          className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm}  ${styles.historytop} `}
                        >
                          <div
                            className={`${globalStyles.flex} ${globalStyles.flexAlignCenter} ${globalStyles.mb_sm_20} `}
                          >
                            <div
                              style={{
                                width: "55px",
                                height: "55px",
                                borderRadius: "55px",
                              }}
                              className={`${globalStyles.mr_10}`}
                            >
                              <img
                                alt="history user"
                                src={
                                  item?.customerProfilePicPath
                                    ? item?.customerProfilePicPath
                                    : HistoryImage
                                }
                                layout="responsive"
                              />
                            </div>
                            <div className={`${styles.content}`}>
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_18} ${globalStyles.fontBold} `}
                              >
                                {item?.customerName}
                              </h5>
                              <h6
                                className={`${globalStyles.smalt} ${globalStyles.fontSize_12} ${globalStyles.fontSemiBold}  `}
                              >
                                Completed
                              </h6>
                            </div>
                          </div>
                          <div
                            className={`${globalStyles.flex} ${globalStyles.flexAlignEnd} ${globalStyles.flexAlignStart_sm} ${globalStyles.flexColumn} `}
                          >
                            <div className={styles.tag}>
                              <h5>{item?.serviceType}</h5>
                            </div>
                            <h5 className={styles.service}>
                              Service No {item?.id}
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${globalStyles.flex} ${globalStyles.flexAlignCenter}  ${globalStyles.flexAlignStart_sm} ${globalStyles.flexJustifyBetween} ${styles.historyitem} ${globalStyles.flexColumn_sm} ${styles.historybottom} ${globalStyles.fullWidth} `}
                        >
                          <div
                            style={{ margin: 0 }}
                            className={`${globalStyles.row} ${globalStyles.fullWidth}  ${globalStyles.flexAlignCenter} `}
                          >
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33}`}
                            >
                              <h5
                                className={`${globalStyles.nero} ${globalStyles.fontSize_16} ${globalStyles.fontBold} ${globalStyles.mb_5}  `}
                              >
                                Payment
                              </h5>
                              <h6
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_15} ${globalStyles.fontRegular}  `}
                              >
                                ${item?.totalAmount}
                              </h6>
                            </div>
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33}`}
                            ></div>
                            <div
                              style={{ padding: 0 }}
                              className={`${globalStyles.column_33} ${globalStyles.flex} ${globalStyles.flexColumn} ${globalStyles.flexAlignEnd}`}
                            >
                              <h5
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium} ${globalStyles.mb_5}  `}
                              >
                                {moment(item?.endDateTime).format("LT")}
                              </h5>
                              <h5
                                className={`${globalStyles.cloudygrey} ${globalStyles.fontSize_13} ${globalStyles.fontMedium}   `}
                              >
                                {moment(item?.endDateTime).format("L")}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              )}
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default History;
