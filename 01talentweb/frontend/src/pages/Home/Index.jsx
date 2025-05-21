// File: App.jsx
import Navbar from '../../components/Navbar.jsx';
import Hero from '../../components/Hero.jsx';
import Stats from '../../components/Stats.jsx';
import CompanyLogos from '../../components/CompanyLogos.jsx';

// import './App.css'; // for animation styling

export default function Index() {
  return (
    <div className="font-sans">
       
      <Navbar />
      <Hero />
      <Stats />
      <CompanyLogos />
    </div>
  );
}
