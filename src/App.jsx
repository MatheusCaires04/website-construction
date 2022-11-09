import About from "./components/About";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Prices from "./components/Prices";
import Projects from "./components/Projects";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Prices />
      <Reviews />
      <Contact />
      <Blogs />
      <Footer />
    </>
  );
}

export default App;
