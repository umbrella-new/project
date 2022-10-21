import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUserState } from '../../../store/slices/userSlice';

import styled from 'styled-components';

import ToggleSWitch from './ToggleSwitch';
import Select from './Select';
import SSRInfoContainer from './SSRInfoContainer';
import SwitchNameSelector from './SwitchNameSelector';

const SSRDetail = ({ data, id }) => {
  const userState = useSelector(selectUserState);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  return (
    <Wrapper>
      <Select data={data.select} id={id} />

      <ToggleSWitchContainer>
        <ToggleSWitch data={data} id={id} />
      </ToggleSWitchContainer>

      <SSRInfoContainer
        data={data}
        id={id}
        isSettingOpen={isSettingOpen}
        setIsSettingOpen={setIsSettingOpen}
      />
      {isSettingOpen && (
        <SwitchNameSelectorWrapper>
          <SwitchNameSelector id={id} data={data.switchName} />
        </SwitchNameSelectorWrapper>
      )}
    </Wrapper>
  );
};

export default SSRDetail;

const Wrapper = styled.div`
  /* height: 60px; */
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;

  margin-bottom: 0.3rem;
  transition: all 200ms ease-in-out;

  /* For the switch name selection box*/
  position: relative;
`;

const ToggleSWitchContainer = styled.div``;

const SwitchNameSelectorWrapper = styled.div`
  position: absolute;
  bottom: 2.2rem;
`;
