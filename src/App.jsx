import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./component/navbar";
import Hero from './component/hero';
import Tentang from "./component/Tentang";
import Kegiatan from './component/Kegiatan'
import Kontak from './component/kontak'
import Footer from './component/footer'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Tentang/>
      <Kegiatan/>
      <Kontak/>
      <Footer/>
    </>
  );
}

export default App;