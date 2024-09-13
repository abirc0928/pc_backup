import React from 'react'
import {Link, useSearchParams} from 'react-router-dom'
function Filter() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('age'))
    const age = searchParams.get('age')
  return (
    <div>
      <h1>Filter</h1>
      <h3>age {age}</h3>
      <button onClick={()=>setSearchParams({age:40})}>Set age params</button>
    </div>
  )
}

export default Filter