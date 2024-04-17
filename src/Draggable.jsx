import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import './site.css'
import Token from '../Scripts/Token';
import logo from './assets/tokenImages/token_1.png';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    token: props.token,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 500px)`
  } : undefined;
  
  return (
    <button ref={setNodeRef} style={style} className={props.className} {...listeners} {...attributes}>
      <img src={props.token.image}/>
    </button>
  );
}