import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {


      const [todos,setTodos] = useState([]);
   

    const addTodo = (todo) => {
     if(!todo.text ){
         return
     }
   
     const newTodos =[...todos,todo];
     console.log(...todos);
     setTodos(newTodos);
    };
    
    const removeTodo = (id) =>{
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    };


    const updateTodo = (todoId , newValue ,count) => {
        if(!newValue.text ){
            return
        }

        setTodos(prev => prev.map(item =>(item.id === todoId? {...newValue,count:item.count+1} : item )))

       



    }
    const incrementCount=(todo)=>{
   
    }

    const completeTodo = (id) => {
        let updatedTodos =todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }

            return todo
        });

        setTodos(updatedTodos);
    }


    console.log(todos,"todos")
  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit ={addTodo} />
      <Todo  todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} 
      updateTodo = {updateTodo} incrementCount={incrementCount}/>
     
    </div>
  )
}

export default TodoList
