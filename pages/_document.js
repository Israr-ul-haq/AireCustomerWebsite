import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect stylesheet"
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Roboto:wght@300;400;500;700;900&display=swap"
          />
        </Head>
        <body>
          <Main />
          <script
            async
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYRy_ggdercsN2hHQ-gmNTu8AhV_mmsq0&libraries=places"
          ></script>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
