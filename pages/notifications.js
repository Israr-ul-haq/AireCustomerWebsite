import Head from "next/head";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Notifications from "../components/notifications/Notifications";
import NextNProgress from "nextjs-progressbar";
function NotificationsPage() {
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
        <title>Aire - Notifications</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Notifications />
    </>
  );
}

export default NotificationsPage;

NotificationsPage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
