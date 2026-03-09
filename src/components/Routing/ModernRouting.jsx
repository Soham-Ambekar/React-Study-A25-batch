import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from '../../Pages/Login'
import Home from '../../Pages/Home'
import Notfound from '../../Pages/Notfound'

const ModernRouting = () => {
    let route = createBrowserRouter([
        {
        path: "/",
        element: <Login></Login>
    },
      {
        path: "/home",
        element: <Home></Home>
    },
      {
        path: "/*",
        element: <Notfound></Notfound>
    },
])




  return (
    <div>
        <RouterProvider router={route}   ></RouterProvider>
    </div>
  )
}

export default ModernRouting