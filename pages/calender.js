import Head from "next/head";
import Calender from "../components/calender/Calender";
import WebsiteLayout from "../components/layouts/WebsiteLayout";

function CalenderPage() {
  return (
    <>
      <Head>
        <title>Aire - Calender</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calender />
    </>
  );
}

CalenderPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default CalenderPage;
