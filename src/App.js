// component imports
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';

// import styles
import './styles/App.scss';

function App() {
  return (
    <>
    {/*Navigation and hero*/}
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <AboutMe />
        <Skills />
      </main>
    </>
  );
}

export default App;
