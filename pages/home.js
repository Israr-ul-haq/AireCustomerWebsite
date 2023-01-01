import Head from "next/head";
import Hero from "../components/home/hero/Hero";
import Location from "../components/home/location/Location";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import NextNProgress from "nextjs-progressbar";

function Home() {
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
        <title>Aire - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Location />
    </>
  );
}
export default Home;
Home.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
