import React from 'react'
import { useNavigate } from 'react-router'

const TaskEdit = ({id}) => {

  const styles = {
        button: {
            padding: '8px 15px',
            fontSize: '0.9rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            backgroundColor: '#007bff',
            color: 'white',
        }
}


    const nav = useNavigate()

    const handleEdit=()=>{
        nav('/edit/'+ id)
    }

  return (
    <div>
      <button onClick={handleEdit} style={styles.button} >Edit</button>
    </div>
  )
}

export default TaskEdit
