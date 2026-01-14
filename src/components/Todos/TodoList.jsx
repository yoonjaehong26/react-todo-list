import styled from 'styled-components';
import  TodoListItem from './TodoListItem.jsx';

const TodoList=()=>{

  return (
    <TodoListContainer>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
      <TodoListItem/>
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
