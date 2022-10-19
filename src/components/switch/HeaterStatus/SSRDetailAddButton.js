import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

const SSRDetailAddButton = ({ name, handleClick }) => {
  const handleOnClick = () => {
    handleClick(name);
  };
  return (
    <Wrapper onClick={handleOnClick}>
      <ButtonHole>
        <ButtonTop>
          <ButtonName>{name}</ButtonName>
        </ButtonTop>
      </ButtonHole>
    </Wrapper>
  );
};

export default SSRDetailAddButton;

const Wrapper = styled.button`
  cursor: pointer;

  width: 71px;
  height: 26px;
  border-radius: 25px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;

  opacity: 1;

  ${flexboxCenter}
`;
const ButtonHole = styled.div`
  width: 62px;
  height: 18px;

  border-radius: 18px;
  ${flexboxCenter}

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;
`;

const ButtonTop = styled.div`
  width: 60px;
  height: 16px;
  border-radius: 25px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  ${flexboxCenter}
`;

const ButtonName = styled.span`
  font-size: 7px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
`;

//
const TempAndButton = styled.div`
  width: 272px;
  height: 36px;
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 3px;
`;
