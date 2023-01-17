import React from 'react'
import Info from './modules/Info'
import  About  from "./modules/About";
import Interest from './modules/Interest'
import './App.css'

export default function App() {
  

  return (
    <div className='bussines-container'>
        <Info />
        <About />
        <Interest />
    </div>
  )
}

