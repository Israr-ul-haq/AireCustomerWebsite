import Head from "next/head";
import ForgotPasswordPage from "../components/login/ForgotPasswordPage";
import withAuth from "../components/shared/withAuth";
import NextNProgress from "nextjs-progressbar";
function login() {
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
        <title>Aire - Forgot Password</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ForgotPasswordPage />
    </>
  );
}

export default withAuth(login);
