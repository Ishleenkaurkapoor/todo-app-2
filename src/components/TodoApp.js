import React,{useState,useEffect} from 'react';
import TodoList from './TodoList';
import InputForm from './InputForm';
import styles from './TodoApp.module.css';
import{v4 as uuid} from 'uuid';

//new added todo should be saved so use useeffect

const TodoApp=()=> {


    const initialtodos =JSON.parse(window.localStorage.getItem('todos' || '[]'));
    //creating state
    const[todos,setTodos]=useState(initialtodos)
//ntodo item will be updated whether addded or removed so 
//dependency will be todos
//if we delte todo it should be removed from localstorage
    useEffect(()=>{
        window.localStorage.setItem('todos',JSON.stringify(todos));
        
    },[todos])


    const addTodo=(inputtask)=>{
        setTodos((prevstate)=>{
            return[...prevstate,
                {id:uuid(),
                    task:inputtask,
                    completed:false}]
        })

    }

    const deletetodo=(todoid)=>{
        setTodos((prevstate)=>{
            return prevstate.filter((todo)=>todo.id!==todoid);
        })

    }


    const toggletodo=(todoid)=>{
        setTodos((prevstate)=>{
            return prevstate.map((todo)=>{
                return ( todo.id===todoid?{...todo,completed: !todo.completed}:todo);
            })
        })
    }
    
    return (
        <div>
            <section className={styles['todo-form']}>
            <InputForm  addTodo={addTodo}/>
            
            </section>
            <section className={styles['todo-list']}>
            <TodoList todos={todos}
            deletetodo={deletetodo}
            toggletodo={toggletodo}/>

            </section>
        </div>
    );
}
//passing todos as props in todolist so that I can 
//display all the todos

export default TodoApp;