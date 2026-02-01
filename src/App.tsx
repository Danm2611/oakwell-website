import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import StormDamage from './components/StormDamage';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <StormDamage />
      <Portfolio />
      <WhyChooseUs />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
