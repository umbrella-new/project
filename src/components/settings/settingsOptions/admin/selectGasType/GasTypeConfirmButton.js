import styled from 'styled-components';

function GasTypeConfirmButton({ handleButton, buttonColor }) {
  return (
    <Wrapper>
      <Wrapper1
        onClick={() => {
          handleButton();
        }}
        color={buttonColor}
      >
        <ButtonHole>
          <ButtonTop color={buttonColor}>
            <ButtonName>confirm</ButtonName>
          </ButtonTop>
        </ButtonHole>
      </Wrapper1>
    </Wrapper>
  );
}

export default GasTypeConfirmButton;

const Wrapper = styled.div`
  width: 120px;
  height: 36px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper1 = styled.button`
  cursor: pointer;
  width: 118px;
  height: 34px;
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
  ${({ color }) =>
    color &&
    'background: transparent linear-gradient(180deg, #1E7FC1 0%, #001640 100%) 0% 0% no-repeat padding-box;'};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonHole = styled.div`
  width: 112px;
  height: 28px;

  border-radius: 20px;
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
  width: 110px;
  height: 26px;
  border-radius: 25px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  ${({ color }) =>
    color &&
    'background: transparent linear-gradient(180deg, #1E7FC1 0%, #001640 100%) 0% 0% no-repeat padding-box;'};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  /* height: 12px; */
  display: inline-block;
  font-size: var(--space1);
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;
