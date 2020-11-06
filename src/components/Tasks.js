import React from 'react'

const Tasks = (props) => {
    const removeItem = (e) => {
        const index = e.target.parentElement.getAttribute('index')
        props.removeTask(index)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <td>Tasks</td>
                    <td></td>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task=>(
                    <tr key = {task.id}>
                        <td> {task.title} </td>
                        <td index={task.id - 1}> <button onClick = {removeItem}> Remove </button> </td>
                    </tr>   
                ))}
               </tbody>
                
            </table>
                
        
        </div>)
        
    
}

export default Tasks
