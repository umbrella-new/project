import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flexboxCenter } from '../../../../styles/commonStyles';
import SnowFactor from './SnowFactor';
import { setResetAllSettingsButtons } from '../../../../store/slices/settingsOfEssSlice';
import { selectUserState } from '../../../../store/slices/userSlice';

function ContainerOfSnowSensor() {
  const tgsTes = ['tgs-snow sensor trigger', 'tes-snow sensor trigger'];
  const ess = ['ess-snow sensor trigger'];
  const temp = ['350'];

  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectUserState);
  const tesSwitch = state.isTesSwitch;

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
  }, []);
  return (
    <Wrapper>
      <Wrapper1>
        <SnowFactor
          tgsTes={tgsTes}
          ess={ess}
          temp={temp}
          tesSwitch={tesSwitch}
        />
      </Wrapper1>
    </Wrapper>
  );
}

export default ContainerOfSnowSensor;

const Wrapper = styled.div`
  width: 594px;
  height: auto;
  ${flexboxCenter};
`;

const Wrapper1 = styled.div`
  width: 588px;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  /* margin-top: 37px;
  margin-left: 4px; */
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-evenly;
`;
