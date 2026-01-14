import TodoTemplate from './components/Todos/TodoTemplate.jsx';
import TodoInsert from './components/Todos/TodoInsert.jsx';
import TodoList from './components/Todos/TodoList.jsx';

function App() {

  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList/>
    </TodoTemplate>
  );
}

export default App;
