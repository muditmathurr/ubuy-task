import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Products from './Components/Products';
import "./index.css";

const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => navigate('/products')}
        style={{
          margin: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Go to Products
      </button>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
