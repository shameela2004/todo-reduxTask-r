import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        tasks:[]
    },
    reducers:{
        addTask:(state,action)=>{
            state.tasks.push(action.payload)
        },
        deleteTask:(state,action)=>{
            state.tasks.splice(action.payload,1)
        }
    }
})

export const {addTask,deleteTask}=todoSlice.actions
export default todoSlice.reducer