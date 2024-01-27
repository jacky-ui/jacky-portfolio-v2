// component imports
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';

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
    </>
  );
}

export default App;
