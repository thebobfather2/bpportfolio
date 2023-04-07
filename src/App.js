import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

export default function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header>
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Header>
      <Main currentPage={currentPage} />
      <Footer />
    </>
  );
}