import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';

const TodoInsert =()=>{
  return (
    <TodoInsertContainer>
      <TodoInsertInput
        placeholder="할 일을 입력하세요"
      />
      <TodoInsertButton><MdAdd color='white'/></TodoInsertButton>
    </TodoInsertContainer>
  );

};
export default TodoInsert;

const TodoInsertContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;    
  background: #495057; 
  `;

const TodoInsertInput = styled.input`
background-color: #495057;
    background: none;
    border: none;
    color: #fff;
    font-size: 1.125rem;
    line-height: 1.5;
    outline: none;
    flex: 1;
    &::placeholder {
      color: #8f9194;
    }
`;

const TodoInsertButton = styled.button`

    align-items: center;
    justify-content: center;
    background: #868e96;
    border: none;
    padding: 0 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
    transition: 0.1s background ease-in;
    &:hover {
      background: #adb5bd;
    }
  `;
