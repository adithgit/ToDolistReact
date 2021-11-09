import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  let [toDos,settoDos] = useState([]);
  let [toDo ,setTodo] = useState(''); 
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday </h2>
      </div>
      {
      //Adding items to the todo list
      } 
      <div className="input">
        <input type="text" value ={toDo} onChange = { (event)=>{ setTodo ( event.target.value ); }} placeholder="🖊️ Add item..." />
        <i onClick =  { ()=>{ settoDos( [...toDos , { id:Date.now(),  value:toDo, status:false } ]); } } className="fas fa-plus"></i>
      </div>
      {
        //Changing the status attribute of objects in the list wrt checkbox  
        // using map and then filter 
        toDos.map((obj)=>{
          return( 
        <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange = { (event)=>{ settoDos( toDos.filter((obj2)=>{
              if(obj2.id === obj.id){
                obj2.status = !obj2.status;
              }
              return obj2;
            }) ); }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.value}</p>
          </div>
          <div className="right">

          {//Deleting items from todo list 
          }
            
            <i onClick = {(event)=>{ settoDos( toDos.filter((obj2)=>{
              return obj2.id!==obj.id
            })) }} className="fas fa-times"></i>
          </div>
        </div>
       </div>
          )
        })
      }
    </div>
  );
}

export default App;
