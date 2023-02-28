import Head from "next/head";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Henry Aviles | Front End Developer</title>
        <meta
          name="description"
          content="Personal Portfolio for Henry Aviles Front End Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="scrollWrapper">
          <Header />
          <AboutMe />
          <Skills />
        </div>
      </main>
    </>
  );
}
