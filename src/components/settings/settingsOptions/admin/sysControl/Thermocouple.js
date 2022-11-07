import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function Thermocouple({ handleLeftSwitch, toggleLeftEnableDisable }) {
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
        <ImageWrapper
          onClick={() => {
            editState && handleLeftSwitch();
          }}
        >
          <Img src={toggleLeftEnableDisable} />
        </ImageWrapper>
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
  box-shadow: inset 1px 1px 2px rgb(255, 255, 255, 0.1);
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

const ImageWrapper = styled.div`
  width: 124px;
  height: 28px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
