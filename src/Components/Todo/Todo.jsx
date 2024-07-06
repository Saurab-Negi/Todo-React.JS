import { useState } from 'react'
import './Todo.css'
import Form from '../Form/Form';
import List from '../List/List';
import DateTime from '../DateTime/DateTime';

const Todo = () => {

  // To store data
  const [task, setTask]= useState([]);

  const handleFormSubmit= (inputVal) =>{
    const {id, content, checked}= inputVal;

    // To know if the content already exist or not
    if(!content){
      return;
    }

    // To know if the data already exist or not
    const ifTodoContentMatched= task.find((task) =>
       task.content === content);
    if(ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, {id, content, checked}]);
  }

  // Todo task Delete
  const handleTodoDelete= (value) =>{
    // console.log(task);
    // console.log(value);
    const updateTask= task.filter((task) => task.content !== value);
    setTask(updateTask);
  }

  // Todo clear functionality
  const handleClearTodo= () =>{
    setTask([]);
  }

  // Todo checked functionality
  const handleCheckTodo= (content) =>{
    const updatedTask= task.map((task) =>{
      if(task.content === content){
        return {...task, checked: !task.checked}
      }
      else{
        return task;
      }
    });
    setTask(updatedTask);
  }

  return (
    <div className='todo'>

      <header>
        <h1>Todo List</h1>
        <DateTime />
      </header>

      <Form onAddTodo={handleFormSubmit} />

      <div className="myUnOrdList">
        <ul>
        {
          task.map((task) =>{
            return <List 
            key={task.id} data={task.content} checked={task.checked}
            onHandleDeleteTodo={handleTodoDelete}
            onHandleCheckTodo={handleCheckTodo} />     
          })
        }
        </ul>
      </div>
      <div className="">
        <button className='clear-btn' onClick={handleClearTodo}>Clear All</button>
      </div>

    </div>
  )
}

export default Todo
