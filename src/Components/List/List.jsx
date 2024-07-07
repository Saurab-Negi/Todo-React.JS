import { MdCheck, MdDeleteForever } from "react-icons/md";

const List = ({data, checked, onHandleDeleteTodo, onHandleCheckTodo}) => {
  return (
    <li className='todo-item'>
        <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
        <div onClick={() => onHandleCheckTodo(data)} className='check-btn'>
          <MdCheck />
        </div>
        <div onClick={() =>onHandleDeleteTodo(data)} className='delete-btn'>
          <MdDeleteForever />
        </div>
    </li>
  )
}

export default List
