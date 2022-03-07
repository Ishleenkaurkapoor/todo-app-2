import React from 'react';
import styles  from'./Todo.module.css';
import {FaTrashAlt} from'react-icons/fa';



//todo list se we will get all the dummy todos here
const Todo=(props)=> {

    const deletetodohandler=()=>
    {
        props.deletetodo(props.id)
    }
    return (
        <li  style={{textDecoration: props.completed? 'line-through':'none'}} className={styles['items']}>
            <span>
                <input onChange={()=>props.toggletodo(props.id)} type="checkbox" defaultChecked={props.completed}/>
            </span>
            <span>{props.task}</span>
            <span onClick={deletetodohandler} className={styles['todo-icon']}><FaTrashAlt/></span>
            
            
        </li>
    );
}
//defaultchecked  if true then by default checkbox will be checked
export default Todo;