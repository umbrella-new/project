import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectEssSwitch } from '../../store/slices/essSwitchSlice';
import { selectUserState } from '../../store/slices/userSlice';
import { flexboxCenter } from '../../styles/commonStyles';

const DisplayEnergyConsumption = () => {
  const state = useSelector(selectEssSwitch);
  const userState = useSelector(selectUserState);

  const energyConsumption = state.energyConsumption
    ? state.energyConsumption
    : 350;

  return (
    <Wrapper>
      <LogoAndTitle>
        <EnergyLogo src={'/images/energy-consumption-logo.svg'} />
        <EnergyTitle>
          energy <br></br>consumption
        </EnergyTitle>
      </LogoAndTitle>
      <EnergyConsumption>
        {energyConsumption} {userState.isEssSwitch ? `Kw` : `m<sup>3</sup?`}
      </EnergyConsumption>
    </Wrapper>
  );
};

export default DisplayEnergyConsumption;

const Wrapper = styled.div`
  ${flexboxCenter}
  width: 195px;
  position: absolute;
  top: 0.35rem;
  right: 0.4rem;
  z-index: 100;

  ${flexboxCenter}
  justify-content: flex-end;
`;

const LogoAndTitle = styled.div`
  ${flexboxCenter}
  margin-right: .4rem;
`;
const EnergyLogo = styled.img`
  margin-right: 0.2rem;
`;
const EnergyTitle = styled.span`
  text-transform: uppercase;
  font-size: 6px;
  color: #fcff01;
`;
const EnergyConsumption = styled.span`
  font-size: 12px;
  color: #fcff01;
`;
