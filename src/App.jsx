import './App.css';
import {Link, Element } from 'react-scroll';
import Header from './components/Header'
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Footer from './components/Footer'
import Home from "./components/Home"
function App() {

  return (
    <>
      <Header />

      <Element name='home'>
        <Home />
      </Element>
      
      <Element name='about'>
        <About />
      </Element>
      
      <Element name='portfolio'>
        <Portfolio />
      </Element>
      
      <Element name='footer'>
        <Footer />
      </Element>
    </>
  )
}

export default App