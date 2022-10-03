import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';

const SchedulerButton = ({ name, id, onClickHandler }) => {
  return (
    <Wrapper onClick={() => onClickHandler(id)}>
      <ButtonHole>
        <ButtonTop>
          <ButtonName>{name}</ButtonName>
        </ButtonTop>
      </ButtonHole>
    </Wrapper>
  );
};

export default SchedulerButton;

const Wrapper = styled.button`
  cursor: pointer;
  width: 131px;
  height: 50px;
  border-radius: 25px;

  /* background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  opacity: 1; */

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  border-radius: 37px;
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
const ButtonHole = styled.div`
  width: 116px;
  height: 36px;

  border-radius: 20px;
  ${flexboxCenter}

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;

  /* background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 20px;
  opacity: 0.8; */
`;

const ButtonTop = styled.div`
  width: 112px;
  height: 34px;
  border-radius: 25px;

  /* background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  opacity: 1; */

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
  font-size: 14px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
`;
