import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx'
import './site.css'
import Board from './Board.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Map" element={<App />} />
          <Route path="/Map" element={<App />} />
          <Route path="*" element={<p>Not Found Sucker</p>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
