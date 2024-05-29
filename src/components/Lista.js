import React, { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';

let nextId = 0;

const Lista = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTodo = () => {
    if (editId !== null) {
      setTodos(todos.map(t => (t.id === editId ? { ...t, todo } : t)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: nextId++, todo, done: false }]);
    }
    setTodo('');
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const handleToggleDone = (id) => {
    setTodos(todos.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(t => t.id === id);
    setTodo(todoToEdit.todo);
    setEditId(id);
  };

  return (
    <div>
      <h1>To do list.</h1>
      <input
        type="text"
        placeholder="Add a task"
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
          {todos.map(t => (
            <tr key={t.id}>
              <td>
                <button onClick={() => handleToggleDone(t.id)}>
                  {t.done ? 'Unmark' : 'Mark'}
                </button>
              </td>
              <td style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
                {t.todo}
              </td>
              <td>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lista;