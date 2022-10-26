import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { selectFaults } from '../../../store/slices/faultsSlice';
import { selectUserState } from '../../../store/slices/userSlice';
import { flexboxCenter } from '../../../styles/commonStyles';

import Chart from './Chart';
import ChartInfoContainer from './ChartInfoContainer';
import ChartTitles from './ChartTitles';
import DisplayStatus from './DisplayStatus';
import Legend from './Legend';

function ChartContainer() {
  const faultsState = useSelector(selectFaults);
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const location = useLocation();

  const essFault = faultsState.ess.isFaults;
  const tgsFault = faultsState.tgs.isFaults;

  const isFaults = isEssSwitch
    ? essFault
    : location.pathname === '/'
    ? tgsFault
    : essFault;

  return (
    <Wrapper>
      <BackgroundWrapper>
        <FileOptionTitleWrapper>
          <FileTitle inActive={true}>video monitoring</FileTitle>
          <FileTitle>graph</FileTitle>
        </FileOptionTitleWrapper>
        <SvgImg
          src={
            isFaults
              ? '/images/chart-background-faults.svg'
              : '/images/chart-background-noFaults.svg'
          }
        />
      </BackgroundWrapper>

      <PositionAbsolute>
        <ChartTitles />
        <ContentsWrapper>
          <ChartInfoContainer />

          <ChartWrapper1>
            <ChartWrapper2>
              <ChartWrapper3>
                <Chart />
              </ChartWrapper3>
            </ChartWrapper2>
          </ChartWrapper1>
          <Legend />
          <DisplayStatus />
        </ContentsWrapper>
      </PositionAbsolute>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 459px;
  width: 594px;
  box-sizing: border-box;
`;

const BackgroundWrapper = styled.div`
  width: 594px;
  height: 474px;
  border-radius: 14px;

  position: relative;
`;

const FileOptionTitleWrapper = styled.div`
  ${flexboxCenter}

  justify-content: space-between;
  width: 13rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;
const FileTitle = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 200ms ease-in;
  :hover {
    transform: scale(103%);
  }
`;

const SvgImg = styled.img`
  width: 100%;
  height: 98%;
  position: absolute;
  top: 0.6rem;
  left: 0.35rem;
`;

const PositionAbsolute = styled.div`
  ${flexboxCenter}
  flex-direction: column;
  justify-content: flex-start;

  position: absolute;
  top: 2.95rem;
  right: 0.3rem;
`;

const ContentsWrapper = styled.div`
  height: 416px;

  ${flexboxCenter}
  justify-content: space-between;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 0.1rem;
`;

const ChartWrapper1 = styled.div`
  width: var(--chart-width);
  height: 254px;

  background: transparent;
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 14px;
  opacity: 1;

  ${flexboxCenter}
`;

const ChartWrapper2 = styled.div`
  width: 576px;
  height: 250px;
  ${flexboxCenter}

  background: transparent
    linear-gradient(90deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  opacity: 1;
`;

const ChartWrapper3 = styled.div`
  width: 570px;
  height: 242px;

  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 10px;
  opacity: 1;
`;

export default ChartContainer;
