import { useEffect } from 'react';
import About from './components/about';
import Experiments from './components/experiments';
import Landing from './components/landing';
import Footer from './components/footer';
import './styles/App.scss';
import Projects from './components/projects';

function App() {

  useEffect(()=> {
    let vh = window.innerHeight *.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`);
  })
  
  return (
    <div className="app">
      <Landing/>
      <About/>
      <Experiments/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
