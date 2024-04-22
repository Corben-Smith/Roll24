import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';
import Sidebar from './Sidebar';
import Board from './Board';



export default function Preview(props) {
  return(
      <div className='flex w-[100vw] h-[100vh]'>
        <Sidebar/>
        <div className='max-w-4xl h-80vh p-6 mx-auto bg-blue rounded-md shadow-md mt-20'>        
          <div className='h-[40vh] overflow-scroll'>
            <Board/>
          </div>
        </div>
      </div>
  )
}