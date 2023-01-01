import Head from "next/head";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import TechnicianProfile from "../components/technicianprofile/TechnicianProfile";
import NextNProgress from "nextjs-progressbar";
function Technician() {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: true }}
      />
      <Head>
        <title>Aire - Technician</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TechnicianProfile />
    </>
  );
}

Technician.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default Technician;
