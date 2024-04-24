import React, {useRef, useEffect, useState} from 'react';
import './site.css'
import { PhotoInput } from './PhotoInput';
import Token from '../Scripts/Token';
import Map from '../Scripts/Map';
import Status from '../Scripts/Status';


export default function App(props) {

  
  useEffect(() => {
    const map = new Map('battle.jpg', [new Token(1, "Fox", 'image.png', new Status("Bloodied", "#FF0000"), 10, 10, 10), new Token(2, "Cook", 'Riley.png', new Status("Bloodied", "#FF0000"), 10, 10, 10)], [170,170]);
    localStorage.setItem('savedMap', JSON.stringify(map))
    })

  return(
    <>
      <p>stealing this for dev stuff</p>
      <PhotoInput file/>
    </>
  )
}