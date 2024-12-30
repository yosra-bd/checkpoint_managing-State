import React, { useContext, useRef } from 'react'
import { TasksContext } from '../TasksContext'
import { useNavigate, useParams } from 'react-router'

const TaskForm = () => {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '20px',
            minHeight: '100vh',
            
            width: '100%',
            maxWidth: '500px',
            backgroundColor: '#f4f7fa',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            gap: '15px',
            width: '100%',
            maxWidth: '500px',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            border: '1px solid #ddd',
        },
        input: {
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            outline: 'none',
            transition: 'border-color 0.3s',
        },
        label: {
            fontSize: '1rem',
            fontWeight: '600',
            color: '#333',
        },
        button: {
            padding: '12px 20px',
            fontSize: '1rem',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
        }
    }
    

    const {tasks , setTasks} = useContext(TasksContext)

    const titleRef = useRef()
    const descriptionRef = useRef()

    const navigate = useNavigate()
    const { id } = useParams()

    const title = tasks[id]?.title||''
    const description = tasks[id]?.description||''


    const handleSubmit = (e)=>{
        e.preventDefault()

        const title = titleRef.current.value
        const description = descriptionRef.current.value

        setTasks([...tasks,{title,description}])
        navigate('/')
    }

    const handleEdit =(e) =>{
        e.preventDefault()

        const updatedTasks = tasks.map((task,index)=>{
            if (index === Number(id)){
                return {
                    ...task,
                    title : titleRef.current.value,
                    description : descriptionRef.current.value
                }
            }
        return task
        })
        setTasks (updatedTasks)
        navigate('/')
    }
    
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <label htmlFor='title' style={styles.label}>Title : </label>
        <input type='text' placeholder='title' ref={titleRef} defaultValue={title} style={styles.input}/>
        <label htmlFor='description' style={styles.label}>description : </label>
        <input type='text' placeholder='description' ref={descriptionRef} defaultValue={description} style={styles.input}/>
        {id 
            ?<button onClick={handleEdit} style={styles.button}>Edit</button>
            :<button onClick={handleSubmit} style={styles.button}>Submit</button>}
      </form>
    </div>
  )
}

export default TaskForm
