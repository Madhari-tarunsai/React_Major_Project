import React from 'react'
import Sigin from './Pages/Signin/Sigin'
import Login from './Pages/Login/Login'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="//sigin" element={<Sigin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    
      
      
    </div>
  )
}

export default App