import Head from "next/head";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Maintenance from "../components/maintenance/Maintenance";
import NextNProgress from "nextjs-progressbar";
function MaintenancePage() {
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
        <title>Aire - Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Maintenance />
    </>
  );
}

MaintenancePage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};

export default MaintenancePage;
