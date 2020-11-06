import './App.css';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id:1,
      title: "take out the trash"
    },
    {
      id:2,
      title: "Do homework"
    },
    {
      id:3,
      title: "Clean the dishes"
    },
    {
      id:4,
      title: "Do laundry"
    }
  ])
  
  
  return (
    <div className="App">
    <Tasks tasks={tasks} removeTask = {(index) => setTasks((prevTasks)=>{
        prevTasks.splice(index, 1)
        return [...prevTasks]
    })}/>
    <AddTasks addTask ={(task) => setTasks([...tasks, task])} tasks={tasks}/>

      
    </div>
  )
}

export default App 
    
    


