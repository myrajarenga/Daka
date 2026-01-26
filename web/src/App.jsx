import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Membership from './pages/Membership';

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-daka-orange selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/membership" element={<Membership />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
