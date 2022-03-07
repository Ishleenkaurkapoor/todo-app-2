import React,{useState,} from 'react';
import  styles from './InputForm.module.css';
import {AiOutlineUserAdd} from 'react-icons/ai';


const InputForm =(props)=> {

    const[input,setInput]=useState('')
    const[isvalid,setisvalid]=useState(true);
//this is going to set our new value to input 
    const InputChangeHandler=(e)=>{

        if(input.trim().length>0)
        {setisvalid(true);
        }
        setInput(e.target.value)
    }
    const formSubmitHandler=(e)=>{
        e.preventDefault()

        if(input.trim().length===0)
        {
            setisvalid(false);
            return;
        }
        props.addTodo(input)
        setInput("");
    }
    return (
       <form  onSubmit={formSubmitHandler} className={styles['todo-input']}>
           <label style={{color: !isvalid?'red':'white'}} htmlFor="todo">Add Todo</label>
           <input type="text" 
           id="todo"
           onChange={InputChangeHandler}
           value={input}
           style={{borderColor:!isvalid?'red' :'#ccc'}}/>
           <button type="submit"><AiOutlineUserAdd/></button>

       </form>
    );
}

export default InputForm;