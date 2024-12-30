import React, { useContext } from 'react'
import { TasksContext } from '../TasksContext'

const TaskDelete = ({id}) => {

  const styles = {
    deleteButton:{
      padding: '8px 15px',
      fontSize: '0.9rem',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      backgroundColor: '#dc3545',
      color: 'white',
    }
}

    const {tasks, setTasks}= useContext(TasksContext)

    const handleDelete=()=>{
        const newTasks = tasks.filter((task, index)=> index !== id)
        setTasks(newTasks)
    }
  return (
    <div>
      <button onClick={handleDelete} style={styles.deleteButton}>Delete</button>
    </div>
  )

}

export default TaskDelete
