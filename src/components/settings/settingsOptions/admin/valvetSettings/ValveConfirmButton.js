import styled from 'styled-components';

function ValveConfirmButton({ buttonColor, buttonName }) {
  return (
    <Wrapper>
      <Wrapper1 buttonColor={buttonColor}>
        <ButtonHole>
          <ButtonTop buttonColor={buttonColor}>
            <ButtonName>{buttonName}</ButtonName>
          </ButtonTop>
        </ButtonHole>
      </Wrapper1>
    </Wrapper>
  );
}

export default ValveConfirmButton;

const Wrapper = styled.div`
  width: 71px;
  height: 30px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 26px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper1 = styled.button`
  cursor: pointer;
  height: 28px;
  width: 69px;
  border-radius: 25px;
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
  ${({ buttonColor }) =>
    buttonColor &&
    'background: transparent linear-gradient(180deg, #1E7FC1 0%, #001640 100%) 0% 0% no-repeat padding-box;'};
  opacity: 1;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonHole = styled.div`
  width: 63px;
  height: 22px;

  border-radius: 22px;
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
  width: 59px;
  height: 18px;
  border-radius: 20px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  ${({ buttonColor }) =>
    buttonColor &&
    'background: transparent linear-gradient(180deg, #1E7FC1 0%, #001640 100%) 0% 0% no-repeat padding-box;'};
  opacity: 1;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  font-size: var(--space2);
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
  text-align: center;
`;
