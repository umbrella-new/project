import { useSelector } from 'react-redux';
import { selectSystemIdentification } from '../store/slices/settingSystemIdentificationSlice';

import styled from 'styled-components';
import { flexboxCenter } from '../styles/commonStyles';

import DateAndWeather from './DateAndWeather';
import { selectSettingsOfTgsTes } from '../store/slices/settingsOfTgsTesSlice';
import { selectUserState } from '../store/slices/userSlice';
import { selectSettingsOfEss } from '../store/slices/settingsOfEssSlice';

const Header = () => {
  const systemIdentificationState = useSelector(selectSystemIdentification);
  const userState = useSelector(selectUserState);
  const tgsTesSettingState = useSelector(selectSettingsOfTgsTes);
  const state = useSelector(selectSettingsOfEss);

  const mode = state.interfaceMode;
  const sysState = systemIdentificationState.sysIdentification;
  const { isEssSwitch, isTesSwitch } = userState;
  const { gasType } = tgsTesSettingState;

  // true == ng / lp

  const EssSwitchName =
    sysState.switchName.length < 1
      ? 'switch'
      : `${sysState.locationName}-${sysState.switchName} ${
          sysState.switchSize
        } ${sysState.application}-${sysState.heatingSystem.split(' - ')[0]}`;

  const tgsTesSwitchName =
    sysState.switchName.length < 1
      ? 'switch'
      : `${sysState.locationName}-${sysState.switchName} ${
          sysState.switchSize
        } ${sysState.application}-${
          sysState.heatingSystem.split(' - ')[0].split('-')[0]
        }/${isEssSwitch || gasType ? 'NG-' : 'LP-'}${
          sysState.heatingSystem.split(' - ')[0].split('-')[1]
        } 
         `;

  const tgsSwitchName =
    sysState.switchName.length < 1
      ? 'switch'
      : `${sysState.locationName}-${sysState.switchName} ${
          sysState.switchSize
        } ${sysState.application}-${sysState.heatingSystem.split(' - ')[0]} / ${
          isEssSwitch || gasType ? 'NG' : 'LP'
        }`;

  const machineId = sysState.sysId > 0 ? `id : ${sysState.sysId}` : 'id';

  return (
    <OutsideWrapper>
      <DateAndWeather />
      <HeaderHole>
        <HeaderTop>
          <HeaderDisplayWrapper>
            <MachineData>
              {!isEssSwitch && isTesSwitch
                ? tgsTesSwitchName
                : !isEssSwitch && !isTesSwitch
                ? tgsSwitchName
                : EssSwitchName}
            </MachineData>
          </HeaderDisplayWrapper>
          <Logo src={'/images/Umbrella-logo.png'} alt='Logo Image' />
          <HeaderDisplayWrapper>
            <MachineData>{machineId}</MachineData>
          </HeaderDisplayWrapper>
        </HeaderTop>
      </HeaderHole>
    </OutsideWrapper>
  );
};

export default Header;

const OutsideWrapper = styled.header`
  /* border: 1px solid red; */

  ${flexboxCenter}
  flex-direction: column;
  width: 100%;

  margin-bottom: var(--space3);
`;
const HeaderHole = styled.div`
  width: 1002px;
  height: 52px;
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #000000;
  border-radius: 39px;
  opacity: 1;

  ${flexboxCenter}
`;

const HeaderTop = styled.div`
  height: 50px;
  width: 1000px;

  display: flex;
  justify-content: space-between;
  padding: 0 0.5%;
  align-items: center;

  background: transparent
    linear-gradient(180deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 2px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #00000029, 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
`;

const HeaderDisplayWrapper = styled.div`
  height: 40px;
  width: 389px;
  border-radius: 20px;

  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;

  opacity: 1;

  ${flexboxCenter}
`;
const Logo = styled.img`
  height: 42px;
  width: 42px;
`;

const MachineData = styled.span`
  font-size: 16px;
`;
