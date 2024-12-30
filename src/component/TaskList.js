import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { TasksContext } from '../TasksContext'
import TaskItem from './TaskItem'

const TaskList = () => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: '15px',
            width: '100%',
            maxWidth: '800px',
            padding: '20px',
            margin: '0 auto',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        button:{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 20px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '200px',
            transition: 'background-color 0.3s ease',
        },
        taskList: {
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            width: '100%',
        }
        
    }

    const nav = useNavigate()
    const {tasks} = useContext(TasksContext)
  return (
    <div style={styles.container}>
        <div style={styles.taskList}>
      {tasks.map((task, index)=>(
        <TaskItem key={index} item={task} id={index}/>))}
        </div>
        <button type='button' onClick={()=>{nav('/add')}} style={styles.button}>Add Task</button>
      
    </div>
  )
}



export default TaskList
