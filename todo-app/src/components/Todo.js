import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task)} className={`${task.completed  ? 'completed' : ""}`}>
            {task.text}
        </p>
        <div>
            <FontAwesomeIcon icon={faPencilAlt} onClick={() => editTodo(task._id)} />
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task._id)} />
        </div>
    </div>
  )
}
