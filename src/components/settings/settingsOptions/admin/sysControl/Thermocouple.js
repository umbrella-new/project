import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function Thermocouple({
  handleLeftSwitch,
  toggleLeftEnableDisable,
  changeButtonColor,
}) {
  // redux
  const state = useSelector(selectSettingsOfEss);
  const editState = state.buttonsOfSettings.settingsEditButton;

  return (
    <WrapperLeftSwitch>
      <WrapperLeftSwitch2>
        <WrapperThermocouple>
          <Title>Thermocouple</Title>
        </WrapperThermocouple>
        <NoThermocoupleWrapper>
          <WrapperSubTitle>
            <Title>
              No thermocouple temperature control (will run on full power)
            </Title>
          </WrapperSubTitle>
        </NoThermocoupleWrapper>
        {/* <ImageWrapper> */}
        <WrapperButton
          onClick={() => {
            editState && handleLeftSwitch();
          }}
          borderColor={editState}
          color={changeButtonColor}
        >
          <ButtonHole>
            <ButtonTop color={changeButtonColor}>
              <ButtonName>{changeButtonColor ? 'applied' : 'apply'}</ButtonName>
            </ButtonTop>
          </ButtonHole>
        </WrapperButton>
        {/* <Img src={toggleLeftEnableDisable} /> */}
        {/* </ImageWrapper> */}
      </WrapperLeftSwitch2>
    </WrapperLeftSwitch>
  );
}

export default Thermocouple;

const WrapperLeftSwitch = styled.div`
  width: 270px;
  height: 145px;
  margin-top: 5px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border: 1px solid #142033;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperLeftSwitch2 = styled.div`
  width: 264px;
  height: 139px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const WrapperThermocouple = styled.div`
  width: 253px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  font-size: var(--space2);
  text-align: center;
  letter-spacing: 0.9px;
  color: #ffffff;
  text-transform: uppercase;
`;

const NoThermocoupleWrapper = styled.div`
  width: 253px;
  height: 44px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperSubTitle = styled.div`
  width: 168px;
  height: 29px;
`;

// const ImageWrapper = styled.div`
//   width: 124px;
//   height: 28px;
// `;

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
// `;

const WrapperButton = styled.button`
  cursor: pointer;
  height: 35px;
  width: 119px;
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
    css`
      background: transparent linear-gradient(180deg, #1e7fc1 0%, #001640 100%);
    `};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  border: ${({ borderColor, index }) =>
    borderColor && index === 0 ? '1.5px solid #95ff45' : 'none'};
  ${flexboxCenter};
`;
const ButtonHole = styled.div`
  width: 111px;
  height: 27px;

  border-radius: 20px;

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTop = styled.div`
  width: 109px;
  height: 25px;
  margin-bottom: 0.5px;
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
    css`
      background: transparent linear-gradient(180deg, #1e7fc1 0%, #001640 100%);
    `};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  height: 12px;
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;
