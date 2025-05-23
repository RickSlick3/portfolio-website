'use client'
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Resume />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}
