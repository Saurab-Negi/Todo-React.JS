import { useEffect, useState } from 'react'
import { MdCheck, MdDeleteForever } from "react-icons/md";
import './Todo.css'

const Todo = () => {

  const [inputVal, setInputVal]= useState("");

  // To store data
  const [task, setTask]= useState([]);

  // To store Date & Time
  const [dateTime, setDateTime]= useState("");

  const handleInputChange= (value) =>{
    setInputVal(value);
  };

  const handleFormSubmit= (event) =>{
    event.preventDefault();

    if(!inputVal){
      return;
    }

    // To know if the task already exist or not
    if(task.includes(inputVal)){
      setInputVal("");
      return;
    }
    setTask((prevTask) => [...prevTask, inputVal]);

    setInputVal("");
  }

  // Todo Date & Time
  const getDateTime= () =>{
    const now= new Date();
    const formattedDate= now.toLocaleDateString();
  
    const formattedTime= now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formattedTime}`);
  };

  useEffect(() =>{
    const interval= setInterval(() =>{
      getDateTime()
    },1000)
    return () => clearInterval(interval);
  },[])


  // Todo task delete
  const handleTodoDelete= (value) =>{
    console.log(task);
    console.log(value);
    const updateTask= task.filter((ele) => ele !== value);
    setTask(updateTask);
  }

  // Todo clear functionality
  const handleClearTodo= () =>{
    setTask([]);
  }

  return (
    <div className='todo'>

      <header>
        <h1>Todo List</h1>
        <h2 className='date-time'>{dateTime}</h2>
      </header>

      <form action="" onSubmit={handleFormSubmit}>
        <div className="">
            <input type="text" autoComplete='off' value={inputVal}
            onChange={(event) => handleInputChange(event.target.value)} />
        </div>
        <div className="">
            <button type='submit'>Add Task</button>
        </div>
      </form>

      <div className="myUnOrdList">
        <ul>
        {
          task.map((ele, i) =>{
            return (
              <li key={i} className='todo-item'>
                <span>{ele}</span>
                <button className='check-btn'>
                  <MdCheck />
                </button>
                <button onClick={() =>handleTodoDelete(ele)} className='delete-btn'>
                  <MdDeleteForever />
                </button>
              </li>
            )            
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
