import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Membership from './pages/Membership';
import HowItWorks from './pages/HowItWorks';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-daka-orange selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
