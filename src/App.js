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
      <footer className='footer'>
        <section className='footer__container'>
          <p className='footer__header'>Get in touch!</p>
          <article className='footer__links'>
            <a href='https://www.linkedin.com/in/jacky-du-ctech/' aria-label='Click here for my linkedin profile' target='_new'>
              <img
                className='footer__icons'
                src={linkedinIcon} 
                alt='linkedin'
              />
            </a>
            <a href='https://github.com/jacky-ui' aria-label='Click here for my Github' target='_new'>
              <img
                className='footer__icons'
                src={githubIcon} 
                alt='github'
              />
            </a>
          </article>
        </section>
      </footer>
    </>
  );
}

export default App;
