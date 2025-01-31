import React, { useState } from 'react';
import { ToDoList } from "./ToDoList";
import logo from './logo.svg';
import './App.css';

export type FilterValuesType = "all" | "completed" | "active"

function App() {
 const [tasks, setTasks]= useState  ( [
  {id : 1, title :"CSS", isDone: true},
  {id : 2, title :"JS", isDone: true},
  {id : 2, title :"React", isDone: false}
])
const [filter, setFilter] =  useState<FilterValuesType> ("all")

function removeTask(id: number)  {
 let filteredTasks =  tasks.filter((t)=> t.id!==id)
      setTasks(filteredTasks)
}

function changeFilter (value : FilterValuesType) {
setFilter (value)
}
// const tasks2  = [
//   {id : 1, title :"Terminator", isDone: true},
//   {id : 2, title :"XXX", isDone: true},
// ]

let tasksForToDoList = tasks;
if ( filter === "completed") {
  tasksForToDoList = tasks.filter((t) => t.isDone === true)
}

if ( filter === "active") {
  tasksForToDoList = tasks.filter((t) => t.isDone === false)
}
  return (
    <div className="App">
      <ToDoList title ="What to learn"  
      tasks={tasksForToDoList}
      removeTask={removeTask}
      changeFilter={changeFilter}
      />
      {/* <ToDoList title ="Movies" tasks={tasks2}/> */}
    </div>
  );
}

export default App;
