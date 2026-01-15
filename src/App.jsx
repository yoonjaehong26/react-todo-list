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

  const onToggleCheckBox = (selectedTodoId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === selectedTodoId ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsertTodo={onInsertTodo} />
      <TodoList todos={todos} onToggleCheckBox={onToggleCheckBox} />
    </TodoTemplate>
  );
}

export default App;
