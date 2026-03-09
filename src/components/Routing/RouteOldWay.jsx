import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../Pages/Login'
import Home from '../../Pages/Home'
import Notfound from '../../Pages/Notfound'

const RouteOldWay = () => {
  return (
    <div>
        <BrowserRouter >  

        <Routes>
            <Route path='/' element= {<Login></Login>} ></Route>
            <Route path='/home' element = {<Home></Home>}></Route>
            <Route path='/*' element = {<Notfound></Notfound> }></Route>

        </Routes>
        
         </BrowserRouter>
    </div>
  )
}

export default RouteOldWay