import styled from 'styled-components';
import  TodoListItem from './TodoListItem.jsx';

const TodoList=({todos, onToggleCheckBox, onRemoveTodo})=>{

  return (
    <TodoItems>
      {todos.map((todo)=>(
        <TodoListItem key={todo.id} todo={todo}
          onToggleCheckBox={onToggleCheckBox}
          onRemoveTodo={onRemoveTodo}/>
      ))}
    </TodoItems>
  );
};

export default TodoList;

const TodoItems = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;       
  width: 100%;   
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 0;
  `;
