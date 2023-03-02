import "@/styles/globals.css";
import ScrollContextProvider from "@/components/hooks/ScrollContextProvider";
export default function App({ Component, pageProps }) {
  return (
    <ScrollContextProvider>
      <Component {...pageProps} />
    </ScrollContextProvider>
  );
}
