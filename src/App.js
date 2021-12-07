import './App.css';
import Hero from './Components/Hero';
import Header from './Components/Header';
import Box_a from './Components/Box_a';
import Box_d from './Components/Box_d';
import Questions from './Components/Questions';
import Box_b from './Components/Box_b';
import Box_c from './Components/Box_c';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
      </main>
      <Box_a />
      <Box_b />
      <Box_c />
      <Box_d />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
