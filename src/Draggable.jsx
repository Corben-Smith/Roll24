import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: props.id,
    token: props.token,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x * props.scale}px, ${transform.y * props.scale}px, 0px) scale(1.05)`,
    transformOrigin: 'center center',
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
      <img src={`http://localhost:3000/uploads/${props.token.image}`}/>
    </button>
  );
}