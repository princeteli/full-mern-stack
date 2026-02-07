'use client'
import axios from 'axios'
import React, { useState } from 'react'

function TodoForm() {

  const [todo, setTodo] = useState("")
  const handleTodo = async (e) => {
    e.preventDefault()
    let res= await axios.post('/api/todos/',{text:todo})
    console.log(res)
    setTodo("")
  }

  return (
    <div className=' '>
      <form onSubmit={handleTodo}>

        <input value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className='bg-white  text-black' placeholder='enter your todo' />

        <button  className='m-4 bg-red-500 p-2 '>add Todo</button>
      </form>

    </div>
  )
}

export default TodoForm
