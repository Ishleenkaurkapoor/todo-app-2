import React from 'react';
import Todo from './Todo';
import styles from './TodoList.module.css';


//destructring todos from props or we can do props.todo
//props ke object se todo destructure
const TodoList=({todos,deletetodo,toggletodo})=>{
    return (
        <ul classNmae={styles['todo-list']}>
            {
                todos.map((todo,idx)=>
                {
                    return<Todo
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    key={idx}
                    deletetodo={deletetodo}
                    toggle={toggletodo}
                    />
                })
            }
        </ul>
    );
    //loop over all the todos and import todos from callback function in the todo.js
}
//in every function we have passed delte todo function

export default TodoList;