import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';

const TodoInsert =({onInsertTodo})=>{
  const [value, setValue]= useState('');

  const onSubmitTodo = (e) => {
    onInsertTodo(value);
    setValue('');
    e.preventDefault();
  };

  return (
    <TodoInsertContainer onSubmit={onSubmitTodo}>
      <TodoInsertInput
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <TodoInsertButton type="submit">
        <MdAdd color='white'/>
      </TodoInsertButton>
    </TodoInsertContainer>
  );

};
export default TodoInsert;

const TodoInsertContainer = styled.form`
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
