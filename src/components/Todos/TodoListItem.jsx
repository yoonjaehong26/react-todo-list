import styled from 'styled-components';
import { MdCheckBox ,MdRemoveCircleOutline} from 'react-icons/md';
const TodoListItem = () => {
  return (
    <TodoListItemBlock>
      <MdCheckBox />
      <Text>리스트1</Text>
      <MdRemoveCircleOutline color='red'/>
    </TodoListItemBlock>
  );
};

export default TodoListItem;

const TodoListItemBlock = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1; 
`;
