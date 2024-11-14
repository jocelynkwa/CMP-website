import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Team from './pages/Team';
import Files from './pages/Files';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AboutUs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/files" element={<Files />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;