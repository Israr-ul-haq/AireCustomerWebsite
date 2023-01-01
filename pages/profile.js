import Head from "next/head";
import React from "react";
import WebsiteLayout from "../components/layouts/WebsiteLayout";
import Profile from "../components/profile/Profile";
import NextNProgress from "nextjs-progressbar";
function ProfilePage() {
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
        <title>Aire - Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Profile />
    </>
  );
}

export default ProfilePage;

ProfilePage.getLayout = function getLayout(page) {
  return <WebsiteLayout>{page}</WebsiteLayout>;
};
