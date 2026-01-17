import styled from 'styled-components';
import { MdCheckBox,MdCheckBoxOutlineBlank } from 'react-icons/md';
import { UnStyledButton } from '../ui/UnStyledButton.jsx';

const CheckBoxButton = ({ checked, onClick }) => {
  return (
    <StyledCheckBoxButton onClick={onClick}
      aria-label={checked ? '할 일 체크 해제 버튼' : '할 일 체크 버튼'}
      type="button"
    >
      {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
    </StyledCheckBoxButton>
  );
};

export default CheckBoxButton;

const StyledCheckBoxButton = styled(UnStyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.5rem;
  `;
