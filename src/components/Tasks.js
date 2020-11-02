import React from 'react'

const Tasks = ({tasks}) => {
    return (
        <div>
            {tasks.map(task=>(
                <h1>{task.title}</h1>

            ))}
                
        
        </div>
    )    
    
}

export default Tasks
