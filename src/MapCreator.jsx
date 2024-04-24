import React, {useRef, useState} from 'react';

import './site.css'
import { PhotoInput } from './PhotoInput';




export default function UI(props) {
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);
  const [image, setSelectedImage] = useState(localStorage.getItem("savedImage"))

  function handleSubmit(event){
    event.preventDefault()
  }

  function handleChangeColumns(event){
    setColumns(event.target.value)
  }
  function handleChangeRows(event){
    setRows(event.target.value)
  }


  
  return(
      <div>      
      <section>
        <form onSubmit={handleSubmit}>        
        <label>Upload Map Image:</label>
        <PhotoInput value = {image} onChange = {setSelectedImage}/>
          <label>
            Columns:
            <input type="number" value={columns} onChange={handleChangeColumns}/>        
          </label>
          <label>
            Rows:
            <input type="text" value={rows} onChange={handleChangeRows}/>        
          </label>
          <input type="submit" value="Submit" />
        </form>
        </section>
      </div>
  )
}