import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function ForceGasElectricSystem({
  handleRightSwitch,
  toggleRightEnableDisable,
}) {
  const state = useSelector(selectSettingsOfEss);
  const editState = state.buttonsOfSettings.settingsEditButton;

  return (
    <WrapperRightSwitch>
      <WrapperRightSwitch2>
        <WrapperForce>
          <WrapperTitle>
            <Title>Force - gas & electric system simultaneously on.</Title>
          </WrapperTitle>
        </WrapperForce>
        <ImageWrapper
          onClick={() => {
            editState && handleRightSwitch();
          }}
        >
          <Img src={toggleRightEnableDisable} />
        </ImageWrapper>
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
`;

const Title = styled.p`
  font-size: var(--space2);
  text-align: center;
  letter-spacing: 0.9px;
  color: #ffffff;
  text-transform: uppercase;
`;

const ImageWrapper = styled.div`
  width: 124px;
  height: 28px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
