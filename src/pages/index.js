import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Cuttle from "@/components/Cuttle";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <Cuttle />
        <Contact />
      </main>
    </>
  );
}
