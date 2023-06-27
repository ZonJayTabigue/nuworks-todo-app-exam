import React, {useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import { getTodosApi, addTodoApi, toggleCompleteApi, deleteTodoApi, editTodoApi } from '../utils/Handler';

uuidv4();
export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const [isEditing, setIsEditing] = useState({
        status: false,
        id: 0
    })

    useEffect(() => {
        getTodosApi(setTodos)
    }, [])

    const addTodo = todo => {
        addTodoApi(todo, setTodos)
    }

    const toggleComplete = todo => {
        toggleCompleteApi(todo._id, !todo.completed, setTodos)
    }

    const editTodo = id => {
        todos.map(todo => {
            if (todo._id === id) {
                setIsEditing({
                    status: true,
                    id: id
                })
                return todo
            } else {
                return todo
            }
        })
    }

    const editTask = (text, id) =>  {
        editTodoApi(id, text, setTodos)
        setIsEditing({
            status: false,
            id: id
        })
    }

    const deleteTodo = id => {
        deleteTodoApi(id, setTodos)
    }

    
  return (
    <div className='TodoWrapper'>
        <h1>TO-DO APP</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo) => (
            (isEditing.id === todo._id && isEditing.status) ? (
                <EditTodoForm editTodo={editTask} task={todo} key={todo._id}/>
            ) : (
                <Todo 
                    task={todo} key={todo._id}
                    toggleComplete={toggleComplete}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            )
        
        ))}
    </div>
  )
}
