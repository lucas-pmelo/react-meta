import "./App.css";
import Footer from "./components/Footer.js";
import Hero from "./components/Hero.js";
import Nav from "./components/Nav.js";
import Highlights from "./components/Highlights.js";
import Testimonials from "./components/Testimonials.js";
import About from "./components/About.js";
import "./style/Index.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
