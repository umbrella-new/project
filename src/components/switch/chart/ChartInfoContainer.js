import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

const ChartInfoContainer = () => {
  // Sytem title will be chaged by state from store
  const SYSTEM_TITLE = 'ess-electric switch system';
  const GRAPH_GUIDE_TITLE = 'HEATER TEMPERATURE Vs TIME';
  const startTime = '3:50am - 12/25/2021';
  const endTime = '4:50am - 02/06/2022';
  return (
    <Wrapper>
      <InfoTitle>{SYSTEM_TITLE}</InfoTitle>
      <InfoGraph>{GRAPH_GUIDE_TITLE}</InfoGraph>
      <InfoDateWrapper>
        <InfoDate>{startTime}</InfoDate>
        <InfoDate>{endTime}</InfoDate>
      </InfoDateWrapper>
    </Wrapper>
  );
};

export default ChartInfoContainer;

const Wrapper = styled.div`
  height: 40px;
  width: 280px;

  ${flexboxCenter}
  flex-direction:column;
`;

const InfoTitle = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  color: #83ffff;
`;
const InfoGraph = styled.span`
  color: #ffffff;
  font-size: 10px;
`;
const InfoDateWrapper = styled.div`
  ${flexboxCenter}
  justify-content: space-around;
  width: 100%;
`;
const InfoDate = styled.span`
  font-size: 8px;
`;
