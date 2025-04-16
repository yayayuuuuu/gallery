import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // ✅ 注意這裡是 react-dom/client
import './index.css';
import App from './App.jsx';
import { LikeProvider } from './context/LikeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LikeProvider>
      <App />
    </LikeProvider>
  </StrictMode>
);


