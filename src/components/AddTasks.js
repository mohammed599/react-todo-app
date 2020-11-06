import React from 'react'

const AddTasks = (props) => {
    const addToTaskList = (e) => {
        let value = e.target.previousSibling.value
        //addTask({id:5, title:value})
        props.addTask({id:props.tasks.length + 1, title:value})
        //console.log(props.tasks)
    }
    return (
        <div>
            <input type="text" placeholder="Add to tasklist..." />
            <input type="submit" onClick={(e) => addToTaskList(e)}/>
        </div>
    )
}

export default AddTasks
