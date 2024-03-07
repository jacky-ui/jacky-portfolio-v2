// component imports
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import linkedinIcon from './assets/images/linkedin-svgrepo-com.svg';
import githubIcon from './assets/images/github-svgrepo-com.svg';

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
        <Projects />
      </main>
      <footer>
        <section>
          <p>Get in touch!</p>
          <article>
            <a>
              <img 
                alt='linkedin'
              />
            </a>
          </article>
        </section>
      </footer>
    </>
  );
}

export default App;
