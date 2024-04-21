import React, {useRef, useState} from 'react';

import './site.css'
import Token from '../Scripts/Token';




export default function UI(props) {
  const [name, setName] = useState("")
  const [image, setSelectedImage] = useState(localStorage.getItem("savedImage"))
  const [status, setStatus] = useState()
  const [armourClass, setArmourClass] = useState(10)
  const [healthPoints, setHealthPoints] = useState(10)
  const [initiative, setInitiative] = useState(0)
  const [playerToken, setToken] = useState()

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  
  
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  function TokenCreator(name, image, status, armourClass, healthPoints, initiative){

     const token = new Token(name, image, status, armourClass, healthPoints, initiative)
     setToken(token)
  }

  function handleChangeName(event){
    setName(event.target.value)
  }
  function handleChangeStatus(event){
    setStatus(event.target.value)
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

  function getConditions(event){
    fetch("https://www.dnd5eapi.co/api/conditions", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
  }
  

  return(
    <div> 
      <section className="max-w-4xl p-6 mx-auto bg-blue rounded-md shadow-md mt-20">
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className="text-white dark:text-gray-200" value="name">Character Name</label>
                    <input id="name" type="string" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" value="AC">Armour Class</label>
                    <input id="armourClass" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" value="HP">Health Points</label>
                    <input id="hitPoints" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" value="initiative">Initiative</label>
                    <input id="initiative" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" value="Status">Status</label>
                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option>Surabaya</option>
                        <option>Jakarta</option>
                        <option>Tangerang</option>
                        <option>Bandung</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white">
                    Image
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label value="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="">Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                        </label>
                        <p className="pl-1 text-white">or drag and drop</p>
                      </div>
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
            </div>

            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
            </div>
        </form>
      </section>
    </div>
  )
}