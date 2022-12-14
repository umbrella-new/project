import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectUserState } from '../../../store/slices/userSlice';

import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

import DisplayBox from './../DisplayBox';

import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';

const DisplayStatus = () => {
  // Add conditional statement to assignment values
  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  const a = 350;
  const b = '___';
  const energyConsumption = `${a} `;
  const enclosureTemp = b;
  const outsideTemp = b;
  const usage = b;

  const state = useSelector(selectUserState);
  const { isEssSwitch } = state;
  const location = useLocation();

  return (
    <Wrapper>
      <ContentsWrapper>
        <ContentsInnerWrapper>
          <DisplayBox
            currData={energyConsumption}
            unit={'Kw/H'}
            name='energyConsumption'
            label={
              isEssSwitch
                ? 'energy consumption'
                : location.pathname === '/'
                ? 'gas consumption'
                : 'energy consumption'
            }
          />
          <DisplayBox
            currData={enclosureTemp}
            unit={null}
            label='enclosure temperature'
          />
          <DisplayBox
            currData={outsideTemp}
            unit={null}
            label='outside temperature'
          />
          <DisplayBox currData={usage} unit='Hrs' label='hours of usage' />
        </ContentsInnerWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
};

export default DisplayStatus;

const Wrapper = styled.div`
  width: 100%;
  height: 56px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;

  border-radius: 10px;

  ${flexboxCenter}
`;

const ContentsWrapper = styled.div`
  width: 574px;
  height: 52px;

  background: transparent
    linear-gradient(90deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;
  opacity: 1;

  ${flexboxCenter}
`;

const ContentsInnerWrapper = styled.div`
  width: 564px;
  height: 44px;
  border-radius: 7px;

  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;

  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 2px;
`;
