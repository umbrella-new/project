import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import SaveButton from './SaveButton';

function ForceGasElectricSystem({
  handleRightSwitch,
  toggleRightEnableDisable,
  handleSave,
}) {
  const state = useSelector(selectSettingsOfEss);
  const editState = state.buttonsOfSettings.settingsEditButton;

  return (
    <WrapperRightSwitch>
      <WrapperRightSwitch2>
        <WrapperForce>
          <WrapperTitle>
            <Title>
              Force - gas & electric system simultaneously on for 15 minutes
            </Title>
          </WrapperTitle>
        </WrapperForce>
        <ImageAndButtonWrapper>
          <Img
            src={toggleRightEnableDisable}
            onClick={() => {
              editState && handleRightSwitch();
            }}
          />
          <SaveButton
            name={'save'}
            onClick={() => {
              handleSave();
            }}
          />
        </ImageAndButtonWrapper>
      </WrapperRightSwitch2>
    </WrapperRightSwitch>
  );
}

export default ForceGasElectricSystem;

const WrapperRightSwitch = styled.div`
  width: 270px;
  height: 88px;
  margin-top: 5px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border: 1px solid #142033;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperRightSwitch2 = styled.div`
  width: 264px;
  height: 82px;

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

const WrapperForce = styled.div`
  width: 253px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTitle = styled.div`
  width: 206px;
  height: 20px;
  ${flexboxCenter}
`;

const Title = styled.p`
  width: auto;
  height: auto;
  font-size: var(--space2);
  text-align: center;
  letter-spacing: 0.9px;
  color: #ffffff;
  text-transform: uppercase;
`;

const ImageAndButtonWrapper = styled.div`
  width: 264px;
  height: 28px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Img = styled.img`
  width: 124px;
  height: 100%;
`;
