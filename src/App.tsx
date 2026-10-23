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
import Privacy from './components/Privacy';

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : '';
  const isPrivacy = path === '/privacy';

  return (
    <div className="App">
      <Header />
      {isPrivacy ? (
        <Privacy />
      ) : (
        <main id="main">
          <Hero />
          <Services />
          <StormDamage />
          <Portfolio />
          <WhyChooseUs />
          <Reviews />
          <Contact />
        </main>
      )}
      <Footer />
      {!isPrivacy && <FloatingCTA />}
    </div>
  );
}

export default App;
