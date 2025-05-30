import "./styles/global.scss";

import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";

import { LanguageProvider } from "./languageContext";

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Menu />
        <Hero />
        <Contact />
        <Projects />
        <Footer />
      </LanguageProvider>
    </div>
  );
}

export default App;
