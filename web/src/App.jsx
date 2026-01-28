import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Membership from './pages/Membership';
import HowItWorks from './pages/HowItWorks';
import WhyDaka from './pages/WhyDaka';
import Partnerships from './pages/Partnerships';
import TryDaka from './pages/TryDaka';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-daka-orange selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/why-daka" element={<WhyDaka />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/try-daka" element={<TryDaka />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
