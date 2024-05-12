import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import LandingPage from "./components/LandingPage"
// import Hero from "./components/Hero"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <React.Fragment>

      <BrowserRouter>
      {/* <LandingPage/> */}
        <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
