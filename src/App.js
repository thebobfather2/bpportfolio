import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';


export default function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };




  return (
    <main className={`p-3`} style={{}}>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div style={{minHeight:'80vh'}}>
      {renderPage()}
      </div>
      <Footer/>
    </main>
  );
}