import styled from 'styled-components';
import {
  flexboxCenter,
  ssrHole,
  ssrOff,
  ssrOn,
} from '../../../styles/commonStyles';

const SSRButton = ({ status, id }) => {
  const switchStatus = status === 'flt' ? 'flt' : status ? 'on' : 'off';

  return (
    <Wrapper>
      <SSRId>ssr {id}</SSRId>
      <WrapperHole status={switchStatus}>
        <OuterCircle status={switchStatus}>
          <InnerHole>
            <Title status={switchStatus}>{switchStatus}</Title>
          </InnerHole>
        </OuterCircle>
      </WrapperHole>
    </Wrapper>
  );
};

export default SSRButton;

const Wrapper = styled.div`
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;

  /* Space between title and button */
  padding: 0.3rem 0; ;
`;

const SSRId = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
  text-align: center;
`;

const WrapperHole = styled.div`
  ${flexboxCenter}

  width: 51px;
  height: 29px;
  border-radius: 27px;

  ${ssrHole}
`;
const OuterCircle = styled.div`
  ${flexboxCenter}

  width: 50px;
  height: 28px;
  border-radius: 25px;

  ${(p) => (p.status === 'on' ? `${ssrOn}` : `${ssrOff}`)}
  border: ${(p) => p.status === 'flt' && `2px solid red`};
`;
const InnerHole = styled.div`
  ${flexboxCenter}

  width: 39px;
  height: 17px;
  border-radius: 20px;

  ${ssrHole}
`;
const Title = styled.span`
  ${flexboxCenter}
  font-size: 10px;
  text-transform: uppercase;

  width: 38px;
  height: 16px;
  border-radius: 25px;

  ${(p) => (p.status === 'on' ? `${ssrOn}` : `${ssrOff}`)}
`;
