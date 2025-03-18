import React from 'react';
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import GlobalStyles from './GlobalStyles.js';

function App() {
  return (
    <Router>
      {/* <GlobalStyles /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
