import styled from 'styled-components';
import { MdCheckBox,MdCheckBoxOutlineBlank ,MdRemoveCircleOutline} from 'react-icons/md';
const TodoListItem = ({todo, onToggleCheckBox, onRemoveTodo}) => {

  return (
    <TodoListItemContainer>
      <CheckBoxContainer onClick={() => onToggleCheckBox(todo.id)}>
        {todo.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBoxContainer>
      <Text $isChecked={todo.isChecked}>{todo.text}</Text>
      <RemoveButtonContainer onClick={() => onRemoveTodo(todo.id)}>
        <MdRemoveCircleOutline />
      </RemoveButtonContainer>
    </TodoListItemContainer>
  );
};

export default TodoListItem;

const TodoListItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  `;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 
  color: ${({ $isChecked }) => ($isChecked ? '#adb5bd' : 'inherit')};
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
`;

const RemoveButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
