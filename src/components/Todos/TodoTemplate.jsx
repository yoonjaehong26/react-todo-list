import styled from 'styled-components';
import GreedyLogo from '../ui/GreedyLogo.jsx';
const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateWrapper>
      <TodoTemplateContainer>
        <TodoTemplateHeader/>
        {children}
      </TodoTemplateContainer>
    </TodoTemplateWrapper>
  );
};
export default TodoTemplate;

const TodoTemplateHeader=()=>{
  return(
    <TodoTemplateHeaderContainer>
      <GreedyLogo/>
      <TodoTemplateHeaderText>
        일정관리
      </TodoTemplateHeaderText>
    </TodoTemplateHeaderContainer>
  );
};

const TodoTemplateWrapper = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center;     
  min-height: 100vh;      
`;

const TodoTemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;   
  border: 1px solid black;
  border-radius: 4px;
  overflow: hidden;       
  width: 480px;
  height: 400px;

`;

const TodoTemplateHeaderContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width:100%;
  height:48px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const TodoTemplateHeaderText = styled.div`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 20px;
`;
