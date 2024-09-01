import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Component/Signup';
import Login from './Component/LoginPage';
// import DashBoard from './Component/DashBoard'
import DashboardLayout from './Component/DashBoard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup />} />
         <Route path="/login" element={<Login />} />
          <Route path='/DashboardLayout' element={<DashboardLayout />} />
          {/* <Route path='/home/dashboard' element={<DashBoard />} /> */}
        {/* <Route path='/DashboardPage' element={<DashboardPage />}/> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route/>
      </Routes>
    </Router>
  );
};

export default App;

