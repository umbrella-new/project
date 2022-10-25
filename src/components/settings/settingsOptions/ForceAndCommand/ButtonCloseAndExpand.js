import styled from 'styled-components';

const ButtonCloseAndExpand = ({ name, tesSwitchFalse }) => {
  return (
    <Wrapper tesSwitchFalse={tesSwitchFalse}>
      <ButtonHole tesSwitchFalse={tesSwitchFalse}>
        <ButtonTop tesSwitchFalse={tesSwitchFalse}>
          <ButtonName tesSwitchFalse={tesSwitchFalse}>{name}</ButtonName>
        </ButtonTop>
      </ButtonHole>
    </Wrapper>
  );
};

export default ButtonCloseAndExpand;

const Wrapper = styled.button`
  cursor: pointer;
  width: 64px;
  height: 22px;
  border-radius: 25px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  border-radius: 37px;
  /* background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  ); */
  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse
      ? 'transparent linear-gradient(180deg, #565656 0%, #1D1D1D 100%)'
      : 'transparent linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%)'};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '0 0 2px #3B3B3B' : ' 0 0 2px rgb(0, 0, 0, 100%)'};
  /* 0 0 2px rgba(0, 0, 0, 100%); */
  /* box-shadow: 0 0 2px #3b3b3b; */
`;

const ButtonHole = styled.div`
  width: 59px;
  height: 17px;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* background: #233a54; */
  /* background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '#3B3B3B' : '#1b2b44'}; */
  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '#3B3B3B' : '#233a54'};
  /* background: #3b3b3b; */
  border-color: #707070;

  box-shadow:  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? 'inset 0 0 6px #3B3B3B' : 'inset 0 0 6px #000000'};
  opacity: 1;
  padding: 0;
`;

const ButtonTop = styled.div`
  width: 56px;
  height: 14px;
  border-radius: 25px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  /* background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  ); */
  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse
      ? 'transparent linear-gradient(180deg, #565656 0%, #1D1D1D 100%)'
      : 'transparent linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%)'};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  display: inline-block;
  font-size: var(--space2);
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
`;
