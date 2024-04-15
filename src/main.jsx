import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './site.css'
import Board from './Board.jsx';
import UI from './UI.jsx'
import App from './UI.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path='/' element={<App/>}/>
          <Route path="/UI" element={<UI />} />
          <Route path="/Map" element={<Board />} />
          <Route path="*" element={<p>Not Found Sucker</p>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
