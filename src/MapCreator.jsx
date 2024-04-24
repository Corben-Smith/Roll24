import React, {useRef, useState} from 'react';

import './site.css'
import { PhotoInput } from './PhotoInput';
import Map from '../Scripts/Map';






export default function UI(props) {
  const [columns, setColumns] = useState(10);
  const [rows, setRows] = useState(10);
  const [cellHeight, setCellHeight] = useState()
  const [cellWidth, setCellWidth] = useState();
  const [image, setSelectedImage] = useState(localStorage.getItem("savedMapImage"))
  const [tokens, setTokens] = useState(localStorage.getItem("myTokens"))

  function handleSubmit(event){
    var map = new Map(image, tokens, [cellWidth, cellHeight]);
    localStorage.setItem("savedMap", map);
  }

  function handleChangeColumns(event){
    setColumns(event.target.value)
    setCellWidth(1/event.target.value)
  }
  function handleChangeRows(event){
    setRows(event.target.value)
    setCellHeight(1/event.target.value)
  }
    
  
  
  return(
      <div className='ml-'>      
      <section className='flex flex-left max-w-4xl p-1 float-center ml-6'>
        <form onSubmit={handleSubmit}>        
        <text className=' text-white border-dashed border-2 px-2 py-0 border-white'><b>Map Creator</b></text>
          <br/>
          <label className="text-white">
            Columns:
            <input type="number" className='block w-full mx-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' value={columns} onChange={handleChangeColumns}/>        
          </label>
          <label className="text-white ">
            Rows:
            <input type="text" className='block w-full mx-4  py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring' value={rows} onChange={handleChangeRows}/>        
          </label>
          
          <div>
                    <label className="block text-sm font-medium text-white">Map Image</label>
                  <div className="mt-1 flex justify-center mx-4 px-6 pt-5 pb-6 border-2 border-white border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                          <PhotoInput onChange ={setSelectedImage}/>
                      </div>
                    </div>
                  </div>
                </div>
                <input type="submit" className='px-3 mr-10 py-1 leading-5 text-#000 transition-colors duration-200 bg-light-green rounded-md hover:bg-dark-green hover:text-white focus:outline-none focus:bg-gray-600 mt-2 ml-2' value="Submit" onClick={handleSubmit}/>
        </form>
        </section>
      </div>
  )
}