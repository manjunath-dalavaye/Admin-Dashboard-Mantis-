import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/LoginPage';
import DashBoard from './Component/DashBoard'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/dashboard' element={<DashBoard />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route/>
      </Routes>
    </Router>
  );
};

export default App;

