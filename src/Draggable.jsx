import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import './site.css'
import Token from '../Token';


export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    Draggable: "true"
  } : undefined;
  
  let title = props.title;

  return (
    <button ref={setNodeRef} style={style} className={props.className} {...listeners} {...attributes}>
        {title}
    </button>
  );
}