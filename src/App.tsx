import './styles/global.scss'

import { Hero } from './components/Hero';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Hero/>
      <Contact/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
