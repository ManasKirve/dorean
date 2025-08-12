import React from 'react'
import App from './App'
import "./App.css";

import { Route, Routes } from 'react-router-dom'
import Abouts from './screens/Abouts'
import ContatUs from './screens/ContatUs'


const SecondApp = () => {
  return (
    <Routes> 
      <Route path='/' element={<App/>}/>
      <Route path='/aboubts' element={<Abouts/>}/>
      <Route path='/contact' element={<ContatUs/>}/>
 
    </Routes>
  )
}

export default SecondApp
