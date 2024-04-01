import React from 'react';
import {useDroppable} from '@dnd-kit/core';
import './site.css'
import Token from '../Token';


export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  }


  return (
    <div ref={setNodeRef} className={props.className} style={style}>
      {props.children}
    </div>
  );
}