import { useSelector } from 'react-redux';
import { selectUserState } from '../../store/slices/userSlice';

import styled from 'styled-components';

import Titles from '../settings/headings/Titles';
import FaultSwitch from './FaultSwitch';
import { selectFaults } from '../../store/slices/faultsSlice';

const Faults = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const faultsState = useSelector(selectFaults);
  const { ess, tgs } = faultsState;

  return (
    <Wrapper>
      <TitleWrapper>
        <Titles name='faults' />
      </TitleWrapper>

      <ContentsWrapper>
        {isEssSwitch ? (
          <FaultSwitch
            name='ess'
            title='electric switch system'
            isFaults={ess.isFaults}
            number={ess.number}
          />
        ) : (
          <>
            <FaultSwitch
              name='tgs'
              title='typhoon gas system'
              isFaults={tgs.isFaults}
              number={tgs.number}
            />
            <FaultSwitch
              name='tes'
              title='typhoon electric system'
              isFaults={ess.isFaults}
              number={ess.number}
            />
          </>
        )}
      </ContentsWrapper>
    </Wrapper>
  );
};

export default Faults;

const Wrapper = styled.div`
  height: 462px;
  width: 901px;
`;

const TitleWrapper = styled.div`
  width: 901px;
  height: 22px;
`;

const ContentsWrapper = styled.div``;
