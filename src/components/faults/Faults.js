import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserState } from '../../store/slices/userSlice';
import Titles from '../settings/headings/Titles';
import FaultSwitch from './FaultSwitch';

const Faults = () => {
  const userState = useSelector(selectUserState);
  return (
    <Wrapper>
      <TitleWrapper>
        <Titles name='faults' />
      </TitleWrapper>

      <ContentsWrapper>
        <FaultSwitch />
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
