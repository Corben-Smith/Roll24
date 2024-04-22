import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';
import Sidebar from './Sidebar';
import PreviewBoard from './PreviewBoard';



export default function Preview(props) {
  return(
      <>
        <Sidebar/>
        <div>
          <PreviewBoard map={localStorage.getItem("savedMap")}/>
        </div>
      </>
  )
}