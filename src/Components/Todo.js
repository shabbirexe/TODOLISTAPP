import React,{useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'


function Todo({todos, completeTodo, removeTodo , updateTodo}) {

    const [edit, setEdit] = useState({
        id:null,
        value: "",
        
    });


    const submitUpdate = (value) => {
        updateTodo(edit.id,value );
        setEdit({
            id:null,
            value:'',
            count:0
        });

    };
    
    
    const incrementCount= (todo) => {
// props.incrementCount(todo)
            
    };
     
    
 

    if(edit.id)
    {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }
  return todos.map((todo, index)=>(
      <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
      key={index}>

          <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
              {todo.text} 
              <span> {`(Updated ${todo.count} times)`}</span>
          </div>

          <div className="icons">
              <RiCloseCircleLine  
              onClick={() => removeTodo(todo.id)}
              className='delete-icon'
              />
              <TiEdit 
              onClick={() =>{incrementCount(todo) 
                setEdit({id: todo.id , value:todo.text,count:todo.count})}}
              className='edit-icon'
               
              />

          </div>

      </div>
  ))
}

export default Todo
