import { useState } from 'react'

const Form = ({onAddTodo}) => {

  const [inputVal, setInputVal] = useState({ id: '', content: '', checked: false });
    
    const handleInputChange= (value) =>{
        setInputVal({id:value, content:value, checked: false});
      };

      const handleFormSubmit= (event) =>{
        event.preventDefault();
        onAddTodo(inputVal);
        setInputVal({id:"", content:"", checked: false});
      }

  return (
    <div>
      <form action="" onSubmit={handleFormSubmit}>
        <div className="">
            <input type="text" autoComplete='off' value={inputVal.content}
            onChange={(event) => handleInputChange(event.target.value)} />
        </div>
        <div className="">
            <button type='submit'>Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default Form
