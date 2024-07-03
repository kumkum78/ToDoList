import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [todolist,settodolist]=useState([])

  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalDolist=[...todolist,toname]
     settodolist(finalDolist)
    }

    else{
      alert("ToDo Name Already Exists...")
    }
    event.preventDefault();
  }

  let list = todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist}
      setTodolist={settodolist}/>
    )
  })


  return (
    <div className='App'>
      <h1>ToDo List</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname"/><button><span>Save</span></button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>


    </div>
  );
}

export default App;


function ToDoListItems({value, indexNumber, todolist, setTodolist}){
  let[status, setStatus]=useState(false)
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!=indexNumber)
    setTodolist(finalData)
  }
  let checkstatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)?'completetodo':''} onClick={checkstatus}>{indexNumber+1} {value}<span onClick={deleteRow}>&times;</span></li>
  )
}