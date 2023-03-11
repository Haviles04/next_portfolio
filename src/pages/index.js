import Head from "next/head";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import bitmoji from "@/assets/henryBitmoji.png";

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
        <meta property="og:image" content={bitmoji.src} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
