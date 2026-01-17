import styled from 'styled-components';
import { MdCheckBox,MdCheckBoxOutlineBlank ,MdRemoveCircleOutline} from 'react-icons/md';
import { UnStyledButton } from '../ui/UnStyledButton.jsx';

const TodoListItem = ({todo, onToggleCheckBox, onRemoveTodo}) => {

  return (
    <TodoListItemContainer>
      <CheckBoxButton onClick={() => onToggleCheckBox(todo.id)}
        aria-label={todo.isChecked ? '할 일 체크 해제 버튼' : '할 일 체크 버튼'}
        type="button"
      >
        {todo.isChecked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CheckBoxButton>
      <Text $isChecked={todo.isChecked}>{todo.text}</Text>
      <RemoveButton onClick={() => onRemoveTodo(todo.id)}
        aria-label="할 일 삭제 버튼"
        type="button"
      >
        <MdRemoveCircleOutline />
      </RemoveButton>
    </TodoListItemContainer>
  );
};

export default TodoListItem;

const TodoListItemContainer = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const CheckBoxButton = styled(UnStyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  `;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 
  color: ${({ $isChecked, theme }) => ($isChecked ? theme.colors.grayText : theme.colors.text)};
  text-decoration: ${({ $isChecked }) => ($isChecked ? 'line-through' : 'none')};
`;

const RemoveButton = styled(UnStyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.removeIcon};
  &:hover {
    opacity: 0.5;
  }
`;
