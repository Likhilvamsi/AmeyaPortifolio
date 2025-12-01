import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Finals from "./components/Finals";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Tech />
      <Projects />
      <Finals/>
      <Contact />
    </>
  );
}
