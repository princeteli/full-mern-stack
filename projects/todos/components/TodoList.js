'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TodoList = () => {

  const [list, setList] = useState([])


const task= async ()=>{
  let res= await axios.get('/api/todos')
  
  setList(res.data)

}
  
useEffect(() => {
task()
}, [])

  return (
    <div>
     {list.map((e)=>(
       <li  key={e.id}>{e.text}</li>)
     )}
    </div>
  )
}

export default TodoList

