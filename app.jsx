import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from 'axios';

function useTodos() {
  const [todos,setTodos] = useState([]);

  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos")
     .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
     })
  },[])

  return todos;

}

function App() { 

  const todos = useTodos(); //the code got cleaner will be useful when we make big projects
  
  return <div>
    {todos.map(function(todo){
      return <Todo key={todo.id} title={todo.title} description={todo.description} />
    })}
  </div>
}

function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
}


export default App
