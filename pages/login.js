import Head from "next/head";
import Login from "../components/login/Login";
import withAuth from "../components/shared/withAuth";

function login() {
  return (
    <>
      <Head>
        <title>Aire - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />
    </>
  );
}

export default login;
