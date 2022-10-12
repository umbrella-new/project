import styled from 'styled-components';

const FaultSwitch = () => {
  return (
    <Wrapper>
      <ItemOuterWrapper>
        <ItemInnerHole>
          <ItemTop></ItemTop>
        </ItemInnerHole>
      </ItemOuterWrapper>
    </Wrapper>
  );
};

export default FaultSwitch;

const Wrapper = styled.div``;
const ItemOuterWrapper = styled.div``;
const ItemInnerHole = styled.div``;
const ItemTop = styled.div``;

const SwitchButtonWrapper = styled.div``;
const SwitchImage = styled.img;

const SwitchName = styled.span``;
const divider = styled.div;
