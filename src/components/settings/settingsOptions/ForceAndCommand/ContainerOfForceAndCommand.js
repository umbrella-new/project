import styled from "styled-components";
import { flexboxCenter } from "../../../../styles/commonStyles";
import EssHeader from "./EssHeader";
import SelectArts from "./SelectArts";
import SelectTc from "./SelectTc";
import SysFooter from "./SysFooter";

function ContainerOfForceAndCommand() {
  return (
    <Wrapper>
      <Wrapper2>
        <Wrapper3>
          <Wrapper4>
            <EssWrapper>
              <EssHeader />
            </EssWrapper>
            <NewWrapper>
              <WrapperSelectTcSelectArts>
                <SelectTc />
                <SelectArts />
              </WrapperSelectTcSelectArts>
            </NewWrapper>
            <SysWrapper>
              <SysFooter />
            </SysWrapper>
          </Wrapper4>
        </Wrapper3>
      </Wrapper2>
    </Wrapper>
  );
}

export default ContainerOfForceAndCommand;

const Wrapper = styled.div`
  width: 594px;
  height: 592px;
  /* margin-top: 37px;
  margin-left: 6px; */
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 4px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-around;
  flex-direction: column;
`;

const Wrapper2 = styled.div`
  width: 590px;
  height: 588px;

  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  border: 0.5px solid #000000;
  border-radius: 4px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const Wrapper3 = styled.div`
  width: 570px;
  height: 571px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 28px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: 567px;

  background-image: -webkit-linear-gradient(
    270deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 28px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EssWrapper = styled.div`
  width: 564px;
  height: 53px;
  margin-top: 1px;
`;

const NewWrapper = styled.div`
  width: 560px;
  height: 442px;

  margin-top: 5px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  border-radius: 9px 9px 24px 24px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction:row;
  align-items: flex-start;
`;

const WrapperSelectTcSelectArts = styled.div`
  width: 550px;
  height: 409px;
  margin-top: 4px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const SysWrapper = styled.div`
  width: 564px;
  height: 53px;
  margin-top: 17px;
`;
