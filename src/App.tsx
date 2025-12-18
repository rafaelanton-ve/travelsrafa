import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllDestinations from './pages/AllDestinations';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="font-sans flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<AllDestinations />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;