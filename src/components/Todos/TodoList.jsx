import styled from 'styled-components';
import  TodoListItem from './TodoListItem.jsx';

const TodoList=({todos, onToggleCheckBox})=>{

  return (
    <TodoListContainer>
      {todos.map((todo)=>(
        <TodoListItem key={todo.id} todo={todo} onToggleCheckBox={onToggleCheckBox} />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;       
  width: 100%;   
  overflow-y: auto;
  `;
