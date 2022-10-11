import styled from "styled-components";
import { flexboxCenter } from "../../../../styles/commonStyles";
import SnowFactor from "./SnowFactor";

function ContainerOfSnowSensor() {
  return (
    <Wrapper>
      <FlexWrapper>
        <SnowFactor />
      </FlexWrapper>
    </Wrapper>
  );
}

export default ContainerOfSnowSensor;

const Wrapper = styled.div`
  width: 299px;
  height: 107px;
  margin-top: 37px;
  margin-left: 4px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
`;

const FlexWrapper = styled.div`
  width: 286px;
  height: 94px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
