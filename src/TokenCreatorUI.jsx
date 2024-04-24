import React, {useRef, useState} from 'react';
import {useEffect} from "react";
import ReactDOM from "react-dom/client";

import './site.css'
import Token from '../Scripts/Token';
import Status from '../Scripts/Status';
import { PhotoInput } from './PhotoInput';
import { renderIntoDocument } from 'react-dom/test-utils';
import ConditionSelect from './ConditionSelect';



export default function TokenCreatorUI(props) {
  const [name, setName] = useState("")
  const [image, setSelectedImage] = useState(localStorage.getItem("savedImage"))
  const [statusName, setStatusName] = useState()
  const [statusColor, setStatusColor] = useState()
  const [status, setStatus] = useState()
  const [armourClass, setArmourClass] = useState(10)
  const [healthPoints, setHealthPoints] = useState(10)
  const [initiative, setInitiative] = useState(0)
  const [playerToken, setPlayerToken] = useState([])
  function StatusCreator()
  {
    setStatusColor(Status.method(statusName))

    const status = new Status(statusName, statusColor)

    setStatus(status)
  }

  function TokenCreator(){

     const token = new Token(name, image, status, armourClass, healthPoints, initiative)
     setPlayerToken(token)
  }
  function handleChangeName(event){
    setName(event.target.value)
  }
  function handleChangeStatusName(event){
    setStatusName(event.target.value)
  }
  function handleChangeAC(event){
    setArmourClass(event.target.value)
  }
  function handleChangeHP(event){
    setHealthPoints(event.target.value)
  }
  function handleChangeInitiative(event){
    setInitiative(event.target.value)
  }
  return(
    <div className='bg-blue'> 
      <section className="flex flex-left max-w-4xl p-1 float-right">
        <form>
            <div className=" gap-1 mt-4 sm:grid-cols-2 float-left mr-6">
              <text className=' text-white border-dashed border-2 px-2 py-0 border-white'><b>Token Creator</b></text>
                <div>
                    <label className="text-white dark:text-gray-200" value="name">Character Name</label>
                    <input id="name" type="string" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={handleChangeName}/>
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" value="AC">Armour Class</label>
                    <input id="armourClass" type="number" min='10' max='50' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={handleChangeAC}/>
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" value="HP">Health Points</label>
                    <input id="hitPoints" type="number" min='0'  max='600' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={handleChangeHP}/>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" value="initiative">Initiative</label>
                    <input id="initiative" type="number" min='-5' max='60' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={handleChangeInitiative}/>
                </div>
                <div>
                  <ConditionSelect  onSelect={handleChangeStatusName}/>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white border-dashed rounded-md">
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
                <div className="flex flex-left">
                <button className="px-3 py-1 leading-5 text-#000 transition-colors duration-200 bg-light-green rounded-md hover:bg-dark-green hover:text-white focus:outline-none focus:bg-gray-600 mt-2" onClick={StatusCreator && TokenCreator}>Save</button>
            </div>
            </div>
        </form>
      </section>
    </div>
  )
}
