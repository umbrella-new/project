import { useSelector } from 'react-redux';
import { selectUserState } from '../../store/slices/userSlice';

import styled from 'styled-components';

import Titles from '../settings/headings/Titles';
import FaultSwitch from './FaultSwitch';
import { selectFaults } from '../../store/slices/faultsSlice';

const Faults = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch, isTesSwitch } = userState;

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
            number={ess.message.length}
            message={ess.message}
            comments={ess.comments}
            isTesSwitch={true}
          />
        ) : (
          <>
            <FaultSwitch
              name='tgs'
              title='typhoon gas system'
              isFaults={tgs.isFaults}
              number={tgs.message.length}
              message={tgs.message}
              comments={tgs.comments}
              isTesSwitch={true}
            />
            <FaultSwitch
              name='tes'
              isTesSwitch={isTesSwitch}
              title='typhoon electric system'
              isFaults={ess.isFaults}
              number={ess.message.length}
              message={ess.message}
              comments={ess.comments}
            />
          </>
        )}
      </ContentsWrapper>
    </Wrapper>
  );
};

export default Faults;

const Wrapper = styled.div`
  width: 901px;
  min-height: 462px;
`;

const TitleWrapper = styled.div`
  width: 901px;
  height: 22px;
`;

const ContentsWrapper = styled.div``;
