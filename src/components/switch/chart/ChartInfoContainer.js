import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { selectUserState } from "../../../store/slices/userSlice";
import { flexboxCenter } from "../../../styles/commonStyles";

const ChartInfoContainer = () => {
  // Sytem title will be chaged by state from store
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const location = useLocation();
  const source = isEssSwitch
    ? "ess"
    : location.pathname === "/"
    ? "tgs"
    : "tes";

  const SYSTEM_TITLE =
    source === "ess"
      ? "ess-electric switch system"
      : source === "tgs"
      ? "tgs-typhoon gas system"
      : "tes-typhoon electrical system";

  const GRAPH_GUIDE_TITLE = "HEATER TEMPERATURE Vs TIME";
  const startTime = "3:50am - 12/25/2021";
  const endTime = "4:50am - 02/06/2022";
  return (
    <Wrapper>
      <InfoTitle source={source}>{SYSTEM_TITLE}</InfoTitle>
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
  color: ${(p) =>
    p.source === "ess"
      ? "#83ffff"
      : p.source === "tgs"
      ? "#FF7800"
      : "#95FF45"};
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
