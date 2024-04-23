import React, {useRef, useState} from 'react';

import './site.css'
import Sidebar from './Sidebar';
import TokenCreatorUI from './TokenCreatorUI';
import MapCreator from './MapCreator';



export default function UI(props) {
  
  return(
      <div className='h-[100vh] overflow-hidden bg-blue'>
        <Sidebar/>
        <TokenCreatorUI/>
        
      </div>
  )
}