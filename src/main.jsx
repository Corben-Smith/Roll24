import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './site.css'
import Board from './Board.jsx';
import UI from './UI.jsx';
import App from './App.jsx';
import Preview from './Preview.jsx';
import Roller from './Roller.jsx';
import Effects from './Effects.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
          <Route path='/test' element={<App/>}/>
          <Route path="/" element={<UI />} />
          <Route path="/Preview" element={<Preview />} />
          <Route path="/Roller" element={<Roller />} />
          <Route path="/Effects" element={<Effects />} />
          <Route path="/Map" element={<Board />} />
          <Route path="*" element={<p>Not Found Sucker</p>} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
