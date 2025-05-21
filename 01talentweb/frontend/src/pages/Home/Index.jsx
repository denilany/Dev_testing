// File: App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CompanyLogos from './components/CompanyLogos';

import './App.css'; // for animation styling

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <CompanyLogos />
    </div>
  );
}