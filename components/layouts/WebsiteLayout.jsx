import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import withAuth from "../shared/withAuth";

function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default withAuth(WebsiteLayout);
