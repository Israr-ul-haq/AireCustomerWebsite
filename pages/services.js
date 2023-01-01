import Head from "next/head";
import React from "react";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Hero from "../components/services/hero/Hero";
import NextNProgress from "nextjs-progressbar";
function Services({ data }) {
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
        <title>Aire - Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={data} />
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `http://3.134.204.160:81/api/LookUp/Services?PageNumber=1&PageSize=10`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

export default Services;

Services.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
