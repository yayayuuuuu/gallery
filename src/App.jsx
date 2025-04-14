// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'; // ⬅️ 加入 HomePage
import Shop from './pages/Shop';
import CategoryPage from './pages/CategoryPage';
import WorkDetailPage from './pages/WorkDetailPage';

function App() {
  return (
    <Router>
      <div className="w-full max-w-[1366px] mx-auto bg-base-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/work/:category/:id" element={<WorkDetailPage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

