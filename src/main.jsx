import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
// main.jsx
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
  disable: 'mobile', // Disable on mobile if needed
  mirror: false,
  // Add these options
  disableMutationObserver: false,
  startEvent: 'DOMContentLoaded',
  useClassNames: true,
});

// Add this after AOS.init()
document.addEventListener('aos:in', ({ detail }) => {
  detail.classList.remove('aos-animate');
  requestAnimationFrame(() => {
    detail.classList.add('aos-animate');
  });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
