import {CompleteIcon}from  '../IconComponent/CompleteIcon';
import {DeleteIcon} from '../IconComponent/DeleteIcon';
import "./TodoItem.scss";

function TodoItem(props) {
  //We receive the properties and display them in each item
  return (
    <li className="TodoItem">
      <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"} `}>
        {props.text}
      </p>
      <DeleteIcon 
       onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
