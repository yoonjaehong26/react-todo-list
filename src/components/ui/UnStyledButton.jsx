import styled from 'styled-components';

export const UnStyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  color: inherit;
  outline: none;
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary };
  }
`;