import React from 'react';
import '../App.css';
import Nav from '../components/Nav';
import Welcome from '../components/Welcome';
import Section from '../components/Section';
import Looks from '../components/Looks';
import ScreenShot from '../components/ScreenShot';
import Story from '../components/Story';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Nav scroll />
      <Welcome />
      <Section />
      <Looks />
      <ScreenShot />
      <Story />
      <Footer />
    </div>
  );
}

export default Home;
