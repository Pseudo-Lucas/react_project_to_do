import React, { useState, useEffect } from 'react'

let nextId = 0;

const Counter = () => {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([])


const handleAddTodo = () => {
    setTodos([...todos,{
        id: nextId++,
        todo: todo,
    }])
    setTodo('');
};

    return (
        <div>
            <h1>To do list.</h1>
            <input type="text"
                placeholder='Add a task'
                value={todo}
                onChange={e => setTodo(e.target.value)}
            />

            <button onClick={handleAddTodo}>I got this!</button>

            <table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Task</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {todos.map(todos => (
                        <tr key={todos.id}>
                            <td></td>
                            <td>{todos.todo}</td>
                            <td></td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Counter 