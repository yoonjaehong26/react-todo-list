import styled from 'styled-components';
import { UnStyledButton } from '../ui/UnStyledButton.jsx';
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
        aria-label="할 일 입력창"
      />
      <TodoInsertButton type="submit"
        aria-label="할 일 추가 버튼">
        <MdAdd />
      </TodoInsertButton>
    </TodoInsertContainer>
  );

};
export default TodoInsert;

const TodoInsertContainer = styled.form`
  display: flex;
  width: 100%;
  height: 50px;    
  background: ${({ theme }) => theme.colors.background};
  `;

const TodoInsertInput = styled.input`
    background-color: ${({ theme }) => theme.colors.background};
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

const TodoInsertButton = styled(UnStyledButton)`

    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.buttonColor};
    border: none;
    padding: 0 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    outline: none;
    transition: 0.1s background ease-in;
    color:${({ theme }) => theme.colors.lightText};
    &:hover {
      opacity: 0.5;
    }
  `;
