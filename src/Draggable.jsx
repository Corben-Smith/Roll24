import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import './site.css'
import Token from '../Token';
import logo from './assets/tokenImages/token_1.png';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
  } : undefined;
  
  let token = props.token

  return (
    <button ref={setNodeRef} style={style} className={props.className} {...listeners} {...attributes}>
      <img src={logo}/>
    </button>
  );
}