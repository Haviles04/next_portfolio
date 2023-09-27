import Head from "next/head";
import bitmoji from "@/assets/henryBitmoji.png";
import "@/styles/globals.css";
import ScrollContextProvider from "@/components/hooks/ScrollContextProvider";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Henry Aviles | Front End Developer</title>
        <meta
          name="description"
          content="Personal Portfolio for Henry Aviles Front End Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={bitmoji.src} />
        <link rel="icon" type="image/png" href="/image/icon.png" sizes="any" />
      </Head>
      <ScrollContextProvider>
        <Component {...pageProps} />
      </ScrollContextProvider>
    </>
  );
}
