import styled from 'styled-components';

const MessageButton = ({ name }) => {
  return (
    <WrapperHole>
      <ButtonOuter>
        <ButtonInnerHole>
          <ButtonTop>
            <Title>{name}</Title>
          </ButtonTop>
        </ButtonInnerHole>
      </ButtonOuter>
    </WrapperHole>
  );
};
export default MessageButton;

const WrapperHole = styled.button``;
const ButtonOuter = styled.div``;
const ButtonInnerHole = styled.div``;
const ButtonTop = styled.div``;
const Title = styled.span``;
