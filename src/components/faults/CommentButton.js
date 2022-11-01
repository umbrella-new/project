import { AiFillEdit } from 'react-icons/ai';
import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const CommentButton = ({ name, handleButtonClick }) => {
  return (
    <Wrapper onClick={() => handleButtonClick(name)}>
      <Inner>
        <Top>
          <Title>{name}</Title>
        </Top>
      </Inner>
    </Wrapper>
  );
};
export default CommentButton;

const Wrapper = styled.button`
  width: 72px;
  height: 25px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  ${flexboxCenter}
`;
const Inner = styled.div`
  ${flexboxCenter}

  width: 64px;
  height: 17px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 18px;
`;
const Top = styled.div`
  width: 62px;
  height: 15px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;

  ${flexboxCenter}
`;
const Title = styled.span`
  font-size: 8px;
`;
