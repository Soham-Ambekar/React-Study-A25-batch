import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosTask2 = () => {
    const [state, setState] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/recipes")
        .then((res) => {
            setState(res.data.recipes)
            setFiltered(res.data.recipes)   // set both
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    let handleChange = (e) => {
        const value = e.target.value.toLowerCase()

        const filteredData = state.filter((ele) =>
            ele.cuisine.toLowerCase().includes(value)
        )

        setFiltered(filteredData)
    }

    return (
        <>
        <div>
            <input 
                type="text"
                className='border-2'
                placeholder="Search by cuisine..."
                onChange={handleChange}
            />
        </div>

        {
            filtered.map((ele) => (
                <div key={ele.id}>
                    <br />
                    <h3>{ele.name}</h3>
                    <p>Cuisine: {ele.cuisine}</p>
                </div>
            ))
        }
        </>
    )
}

export default AxiosTask2