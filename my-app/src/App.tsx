import React from 'react';
import { ToDoList } from "./ToDoList";
import logo from './logo.svg';
import './App.css';

function App() {
let tasks1  = [
  {id : 1, title :"CSS", isDone: true},
  {id : 2, title :"JS", isDone: true},
  {id : 2, title :"React", isDone: true}
]

let tasks2  = [
  {id : 1, title :"Terminator", isDone: true},
  {id : 2, title :"XXX", isDone: true},
  {id : 2, title :"New York", isDone: false}
]
  return (
    <div className="App">
      <ToDoList title ="What to learn" tasks={tasks1}/>
      <ToDoList title ="Movies" tasks={tasks2}/>
    </div>
  );
}

export default App;
