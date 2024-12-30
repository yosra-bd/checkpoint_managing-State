import React from 'react'
import TaskDelete from './TaskDelete'
import TaskEdit from './TaskEdit'

const TaskItem = ({ item, id }) => {
    const styles = {
        listItems: {
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            border: '1px solid #ddd',
            transition: 'box-shadow 0.3s ease',
            marginBottom: '15px', 
        },
        textContainer: {
            flex: 1,
            paddingRight: '15px',
        },
        title: {
            fontSize: '1.2rem',
            fontWeight: '600',
            color: '#333',
            marginBottom: '10px', 
        },
        description: {
            fontSize: '1rem',
            color: '#555',
            lineHeight: '1.5',
        },
        buttonContainer: {
            display: 'flex',
            gap: '10px', 
            alignItems: 'center',
        }
    }
    

    return (
        <div style={styles.listItems}>
            <div style={styles.textContainer}>
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.description}>{item.description}</p>
            </div>
            <div style={styles.buttonContainer}>
            <TaskDelete id={id} />
            <TaskEdit id={id} />
            </div>
        </div>
    )
}

export default TaskItem
