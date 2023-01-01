import Head from "next/head";
import History from "../components/history/History";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import NextNProgress from "nextjs-progressbar";
function HistoryPage() {
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
        <title>Aire - History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <History />
    </>
  );
}

export default HistoryPage;

HistoryPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
