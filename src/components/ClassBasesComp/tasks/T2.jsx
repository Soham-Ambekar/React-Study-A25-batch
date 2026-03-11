import axios from 'axios';
import React, { useEffect, useState } from 'react'

const T2 = () => {

    const [state, setstate] = useState(0);

    let fetching = ()=>{
        axios.get('https://placementstracker-4.onrender.com/api/students/STU10000').then((res)=>{console.log(res.data);
         })
    }

    useEffect(()=>{
        fetching()
    },[])


  return (
    <div>

        <p onClick={()=>{ setstate(state+1) }} > count: {state} </p>


    </div>
  )
}

export default T2