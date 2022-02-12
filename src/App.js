import './App.css';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Box_a from './Components/Boxes/Box_a';
import Box_d from './Components/Boxes/Box_b';
import Questions from './Components/Questions';
import Box_b from './Components/Boxes/Box_c';
import Box_c from './Components/Boxes/Box_d';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
      </main>
      <Box_a />
      <Box_d />
      <Box_b />
      <Box_c />

      <Questions />
      <Footer />
    </>
  );
}

export default App;
