import { Header, Footer } from "./components/layout";
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
} from "./components/sections";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
