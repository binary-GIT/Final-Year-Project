import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/LogIn';
import UserPage from './components/User_Page';
import FirstForm from './components/FirstForm';
import SecondForm from './components/SecondForm';
import ThirdForm from './components/ThirdForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/first-form" element={<FirstForm />} />
        <Route path="/second-form" element={<SecondForm />} /> {/* Fixed typo here */}
        <Route path="/third-form" element={<ThirdForm />} /> {/* Fixed typo here */}
      </Routes>
    </Router>
  );
}

export default App;
