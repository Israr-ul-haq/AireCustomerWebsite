import Head from "next/head";
import withAuth from "../components/shared/withAuth";
import Signup from "../components/signup/Signup";
import NextNProgress from "nextjs-progressbar";
function signup() {
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
        <title>Aire - Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Signup />
    </>
  );
}

export default signup;
