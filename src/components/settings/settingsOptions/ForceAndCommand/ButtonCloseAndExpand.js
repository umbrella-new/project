import styled from 'styled-components';

const ButtonCloseAndExpand = ({ name }) => {
  return (
    <Wrapper>
      <ButtonHole>
        <ButtonTop>
          <ButtonName>{name}</ButtonName>
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
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;
const ButtonHole = styled.div`
  width: 59px;
  height: 17px;

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
  width: 56px;
  height: 14px;
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
