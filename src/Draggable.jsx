import React from 'react';
import {useDraggable} from '@dnd-kit/core';
import './site.css'

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    token: props.token,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 500px) scale(1.05)`,
    border: `${props.token.status.color === 'None' || props.token.status === null ? '0px solid rgba(0, 0, 0, 1)' : '8px solid ' + props.token.status.color}`,
    padding: `${props.token.status.color === 'None' || props.token.status === null ? '8px 8px 8px 8px' : ''}`,
    borderRadius: `50%`,
  } : {    
    border: `${props.token.status.color === 'None' || props.token.status === null ? '0px solid rgba(0, 0, 0, 1)' : '8px solid ' + props.token.status.color}`,
    borderRadius: `50%`,
    padding: `${props.token.status.color === 'None' || props.token.status === null ? '8px 8px 8px 8px' : ''}`,
  };
  
  return (
    <button ref={setNodeRef} style={style} className={props.className} {...listeners} {...attributes}>
      <img src={props.token.image}/>
    </button>
  );
}