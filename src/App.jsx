import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn/LogIn';
import SearchAppBar from './components/First_Page/Navbar';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path='/navbar' element={<SearchAppBar />} />

      </Routes>
    </Router>
  );
}

export default App;
