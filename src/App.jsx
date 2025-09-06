import About from "./sections/About";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function App(){
  return(
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About /> 
      <Projects />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
    </div>
  )
}