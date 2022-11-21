import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserState } from '../../../../store/slices/userSlice';
function TcConfirmButton({
  onConfirm,
  essOutsideTemp,
  essEncloseTemp,
  essHeaterTemp,
  tgsTesOutsideTemp,
  burningChamberTemp,
  tgsHeaterTemp,
  tesHeaterTemp,
  tgsTesEncloseTemp,
}) {
  const userState = useSelector(selectUserState);
  const essSwitch = userState.isEssSwitch;

  return (
    <Wrapper>
      {essSwitch ? (
        <Wrapper1
          onClick={() => {
            essOutsideTemp
              ? onConfirm(essOutsideTemp)
              : essEncloseTemp
              ? onConfirm(essEncloseTemp)
              : essHeaterTemp && onConfirm(essHeaterTemp);
          }}
        >
          <ButtonHole>
            <ButtonTop>
              <ButtonName>confirm</ButtonName>
            </ButtonTop>
          </ButtonHole>
        </Wrapper1>
      ) : (
        <Wrapper1
          onClick={() => {
            tgsTesOutsideTemp
              ? onConfirm(tgsTesOutsideTemp)
              : burningChamberTemp
              ? onConfirm(burningChamberTemp)
              : tgsHeaterTemp
              ? onConfirm(tgsHeaterTemp)
              : tesHeaterTemp
              ? onConfirm(tesHeaterTemp)
              : tgsTesEncloseTemp && onConfirm(tgsTesEncloseTemp);
          }}
        >
          <ButtonHole>
            <ButtonTop>
              <ButtonName>confirm</ButtonName>
            </ButtonTop>
          </ButtonHole>
        </Wrapper1>
      )}
    </Wrapper>
  );
}

export default TcConfirmButton;

const Wrapper = styled.div`
  width: 85px;
  height: 34px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 25px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper1 = styled.button`
  cursor: pointer;
  width: 83px;
  height: 32px;
  border-radius: 24px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

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
  /* box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%); */
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonHole = styled.div`
  width: 77px;
  height: 26px;

  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;
`;

const ButtonTop = styled.div`
  width: 73px;
  height: 22px;
  border-radius: 19px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  /* box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%); */
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  height: 12px;
  display: inline-block;
  font-size: var(--space2);
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;
