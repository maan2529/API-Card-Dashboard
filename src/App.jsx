import React from 'react'
import './App.css'
import Routing from './utils/Routering'
import { Link, useLocation } from 'react-router-dom'

function App() {
  const { search, pathname } = useLocation();
  const location = decodeURIComponent(search.split("=")[1])

  return (
    <>
      {location !== 'undefined' || pathname !== '/' ? <Link className='bg-blue-100 absolute top-1 left-54 z-2 mt-1 font-semibold px-2 py-1 rounded-full mb-2' to={"/"}>Home</Link> : null}

      <Routing></Routing>
    </>
  )
}

export default App
