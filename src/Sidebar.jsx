import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';



export default function Sidebar(props) {

  

  
  return(
      <div>      
        
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

        <div className="min-h-screen flex flex-row float-left">
          <div className="flex flex-col w-56 bg-black rounded-r-3xl overflow-hidden bg-light-green">
            <div className="flex items-center justify-center h-20 shadow-md bg-dark-green border-b-4 border-b-white">
              {/*<h1 className="text-3xl uppercase text-indigo-500 text-white">Logo</h1> */}
              <img className='h-16' src=""/>
            </div>
            <ul className="flex flex-col py-4">
            <li>
            <a href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-#000 hover:text-white hover:bg-dark-green">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg "><i className="bx bx-grid"></i></span>
            <span className="text-sm font-medium">Map/Token Creator</span>
            </a>
            </li>
            <li>
              <a href="/Preview" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-#000 hover:text-white hover:bg-dark-green">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><i className="bx bx-map-alt"></i></span>
            <span className="text-sm font-medium">Map Preview</span>
        </a>
      </li>
      <li>
        <a href="/Roller" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-#000 hover:text-white hover:bg-dark-green">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><i className="bx bx-cube-alt"></i></span>
          <span className="text-sm font-medium">Dice & Initiative</span>
        </a>
      </li>
      <li>
        <a href="/Effects" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-#000 hover:text-white hover:bg-dark-green">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg"><i className="bx bx-music"></i></span>
          <span className="text-sm font-medium  ">Ambiance Effects</span>
        </a>
      </li>
    </ul>
  </div>
</div>
</div>
  )
}