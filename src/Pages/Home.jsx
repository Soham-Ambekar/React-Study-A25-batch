import React from 'react'
import Nav from '../components/CusComp/Nav'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='bg-amber-300 h-[10vh] flex justify-center items-center gap-10'>
      <Nav></Nav>
    </div>

    

    <Outlet></Outlet>
    
    
    </>
  )
}

export default Home