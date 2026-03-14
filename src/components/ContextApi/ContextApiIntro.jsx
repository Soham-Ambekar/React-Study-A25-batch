import React, { useEffect } from 'react'
import T1 from './Tasks/T1'
import UserProvider, { UserContext } from './Tasks/UserContext'
import Homme from './Tasks/Homme'
import Cart from './Tasks/Cart'
import axios from 'axios'

const ContextApiIntro = () => {

  
  return (
  //  <T1></T1>

  // <UserContext.Provider value={data}>
  //   <Homme></Homme>
  //   <Cart></Cart>
  // </UserContext.Provider>

  <>
  <UserProvider></UserProvider>
  </>

  )
}

export default ContextApiIntro