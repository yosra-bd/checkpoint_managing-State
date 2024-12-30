import React, {  createContext, useEffect, useState } from 'react'



const TasksContext = createContext()

const TasksProvider = ({ children }) =>{
    const [tasks, setTasks] = useState (()=>{
        const storedTasks = localStorage.getItem('tasks')
        return storedTasks ? JSON.parse(storedTasks):[]
    })

    useEffect(()=>{
        localStorage.setItem('tasks',JSON.stringify(tasks))
    },[tasks])

    return (
        <TasksContext.Provider value={{tasks, setTasks}}>
            {children}
        </TasksContext.Provider>
    )
}


export { TasksContext , TasksProvider}
