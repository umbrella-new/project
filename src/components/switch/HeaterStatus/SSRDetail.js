import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectUserState } from '../../../store/slices/userSlice';

import styled from 'styled-components';

import ToggleSWitch from './ToggleSwitch';
import Select from './Select';
import SSRInfoContainer from './SSRInfoContainer';

const SSRDetail = ({ data, id }) => {
  const userState = useSelector(selectUserState);

  return (
    <Wrapper>
      <Select data={data.select} id={id} />
      <ToggleSWitchContainer>
        <ToggleSWitch data={data.buttonStatus} id={id} />
      </ToggleSWitchContainer>
      <SSRInfoContainer data={data} id={id} />
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
`;

const ToggleSWitchContainer = styled.div``;
