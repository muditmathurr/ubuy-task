import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup';
import "./index.css";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Login />} /> 
          </Routes>
      </Router>
  );
};

export default App