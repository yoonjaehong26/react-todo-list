import TodoTemplate from './components/Todos/TodoTemplate.jsx';
import TodoInsert from './components/Todos/TodoInsert.jsx';
import TodoList from './components/Todos/TodoList.jsx';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const onInsertTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      isChecked: false,
    };
    setTodos(todos.concat(newTodo));
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsertTodo={onInsertTodo} />
      <TodoList todos={todos}  />
    </TodoTemplate>
  );
}

export default App;
