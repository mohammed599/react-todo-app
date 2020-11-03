import React from 'react'

const AddTasks = ({addTask}) => {
    const addToTaskList = (e) => {
        let value = e.target.previousSibling.value
        //addTask({id:5, title:value})
        addTask({id:5, title:value})
    }
    return (
        <div>
            <input type="text" placeholder="Add to tasklist..." />
            <input type="submit" onClick={(e) => addToTaskList(e)}/>
        </div>
    )
}

export default AddTasks
