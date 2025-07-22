import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { addTask, deleteTask } from './redux/todoSlice'

function App() {
  const [value,setValue]=useState("")
  // console.log(addTask,"tasks")
  const tasks=useSelector((state)=>state.todo.tasks)
  const dispatch=useDispatch()
  return (
    <div>
      <input type='text' onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>dispatch(addTask(value))}>add task</button>
      <h2>Tasks</h2>
      {tasks.map((t,index)=>(
        <li key={index}>{t}
        <button onClick={()=>dispatch(deleteTask(index))}>Delete</button>
        </li>
      ))}
    </div>
  )
}

export default App