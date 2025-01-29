import React, { useState } from 'react';
import { ToDoList } from "./ToDoList";
import logo from './logo.svg';
import './App.css';

function App() {
let  initTasks  = [
  {id : 1, title :"CSS", isDone: true},
  {id : 2, title :"JS", isDone: true},
  {id : 2, title :"React", isDone: true}
]
const [tasks, setTasks] = useState (initTasks)
function removeTask(id: number)  {
 let filteredTasks =  tasks.filter((t)=> t.id!==id)
      setTasks(filteredTasks)
}
// const tasks2  = [
//   {id : 1, title :"Terminator", isDone: true},
//   {id : 2, title :"XXX", isDone: true},
// ]


  return (
    <div className="App">
      <ToDoList title ="What to learn"  
      tasks={tasks}
      removeTask={removeTask}
      />
      {/* <ToDoList title ="Movies" tasks={tasks2}/> */}
    </div>
  );
}

export default App;
