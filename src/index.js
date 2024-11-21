import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Импортируем BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals'; // Если вы хотите использовать отчет Web Vitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Оборачиваем наше приложение в Router */}
      <App />
    </Router>
  </React.StrictMode>,
);

// Если вам нужен отчет WebVitals, оставьте эту строку
reportWebVitals();