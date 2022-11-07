import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectFaults } from '../../../store/slices/faultsSlice';
import { selectUserState } from '../../../store/slices/userSlice';

import { flexboxCenter } from '../../../styles/commonStyles';
import styled from 'styled-components';

import MaxHeat12HrsTimer from '../../faults/MaxHeat12HrsTimer';
import Chart from './Chart';
import ChartInfoContainer from './ChartInfoContainer';
import ChartTitles from './ChartTitles';
import DisplayStatus from './DisplayStatus';
import Legend from './Legend';

function ChartContainer() {
  const faultsState = useSelector(selectFaults);
  const { maxHeatFor12hrsTimer } = faultsState.ess;
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const location = useLocation();

  const essFault = faultsState.ess.message.length > 0;
  const tgsFault = faultsState.tgs.message.length > 0;

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

      {/* Another layout for responsible design */}
      {/* <InvisibleWrapper>
        <HatsWrapper>
          <MonitorHat></MonitorHat>
          <GraphHat></GraphHat>
        </HatsWrapper>
        <InnerWrapper></InnerWrapper>
      </InvisibleWrapper> */}

      {maxHeatFor12hrsTimer && isEssSwitch && (
        <TimerWrapperPositionAbsolute>
          <MaxHeat12HrsTimer />
        </TimerWrapperPositionAbsolute>
      )}

      {maxHeatFor12hrsTimer && !isEssSwitch && location.pathname !== '/' && (
        <TimerWrapperPositionAbsolute>
          <MaxHeat12HrsTimer />
        </TimerWrapperPositionAbsolute>
      )}
    </Wrapper>
  );
}
export default ChartContainer;
const Wrapper = styled.div`
  height: 466px;
  width: 594px;
  box-sizing: border-box;
  /* margin-top: 1.5rem; */
  margin-top: 0.4rem;

  display: flex;
`;

const BackgroundWrapper = styled.div`
  width: 594px;
  height: 476px;
  border-radius: 14px;
  ${flexboxCenter};
  position: relative;
  margin-top: 0.2rem;
  border
`;

const FileOptionTitleWrapper = styled.div`
  ${flexboxCenter}

  justify-content: space-between;
  width: 13rem;
  position: absolute;
  top: 0.6rem;
  right: 1.6rem;
  z-index: 1000;
`;
const FileTitle = styled.span`
  font-size: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  :hover {
    transform: scale(103%);
  }
`;

const SvgImg = styled.img`
  height: 97%;
`;

const PositionAbsolute = styled.div`
  width: 580px;
  height: 438px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  position: absolute;
  top: 2.9rem;
  right: 0.44rem;

  padding: 0.02rem 0.1rem 0.05rem 0.1rem;
`;

const ContentsWrapper = styled.div`
  height: 416px;
  width: 100%;

  ${flexboxCenter}
  justify-content: space-between;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 0.1rem;
`;

const ChartWrapper1 = styled.div`
  width: 100%;
  height: 251px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 14px;

  ${flexboxCenter}
`;

const ChartWrapper2 = styled.div`
  width: 574px;
  height: 250px;
  ${flexboxCenter}

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
`;

const ChartWrapper3 = styled.div`
  width: 566px;
  height: 242px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 10px;
`;

const TimerWrapperPositionAbsolute = styled.div`
  position: absolute;
  top: 5rem;
  right: 0.3rem;
`;

const InvisibleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const InnerWrapper = styled.div`
  width: 592px;
  height: 447px;
  border-radius: 12px 0 12px 12px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
`;
const HatsWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const MonitorHat = styled.div`
  width: 155px;
  height: 17px;

  background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%) 0%
    0% no-repeat padding-box;
`;
const GraphHat = styled.div`
  width: 89px;
  height: 17px;

  border: 1px solid var(--unnamed-color-ff0000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
`;
