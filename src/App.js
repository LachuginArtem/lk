import React from 'react';
import './App.css';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <HomeSection />
      <Footer />
    </div>
  );
}

export default App;