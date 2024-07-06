import { MdCheck, MdDeleteForever } from "react-icons/md";

const List = ({data, checked, onHandleDeleteTodo, onHandleCheckTodo}) => {
  return (
    <li className='todo-item'>
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <button onClick={() => onHandleCheckTodo(data)} className='check-btn'>
          <MdCheck />
        </button>
        <button onClick={() =>onHandleDeleteTodo(data)} className='delete-btn'>
          <MdDeleteForever />
        </button>
    </li>
  )
}

export default List
