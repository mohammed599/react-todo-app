import React from 'react'

const Tasks = (props) => {
    const removeItem = (e) => {
        const index = e.target.parentElement.getAttribute('index')
        props.removeTask(index)
    }
    const markComplete = (e) => {
        const key = e.target.parentElement.parentElement.firstChild
        key.style.textDecoration = 'line-through'
    }
    const style = {
        textDecoration : 'none'
    }
    
    return (
        <div>
            <table className = 'table'>
                <thead className = "thead-dark">
                    <tr>
                    <td> <b> Tasks </b> </td>
                    <td></td>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task=>(
                    <tr key = {task.id}>
                        <td> {task.title} </td>
                        <td index={task.id - 1}> <button onClick = {removeItem}> X </button> </td>
                        <td> <input type = 'checkbox' onClick = {markComplete}/> </td>
                    </tr>   
                ))}
               </tbody>
                
            </table>
                
        
        </div>)
        
    
}

export default Tasks
