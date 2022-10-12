import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { flexboxCenter } from "../../../../styles/commonStyles";
import EssHeader from "../ForceAndCommand/EssHeader";
import SysFooter from "../ForceAndCommand/SysFooter";
import Control from "./Control";
import { setResetAllSettingsButtons } from "../../../../store/slices/settingsOfEssSlice";

function ContainerOfAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
  }, []);

  return (
    <Wrapper>
      <Wrapper2>
        <Wrapper3>
          <EssWrapper>
            <EssHeader />
          </EssWrapper>
          <Wrapper4>
            <SysWrapper>
              <SysFooter />
            </SysWrapper>
            <Wrapper5>
              <ControlWrapper>
                <Control />
              </ControlWrapper>
            </Wrapper5>
          </Wrapper4>
        </Wrapper3>
      </Wrapper2>
    </Wrapper>
  );
}

export default ContainerOfAdmin;

const Wrapper = styled.div`
  width: 594px;
  height: 469px;
  /* margin-top: 37px;
  margin-left: 6px; */
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 4px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 590px;
  height: 465px;

  background: transparent
    linear-gradient(180deg, rgb(35, 58, 84) 0%, rgb(0, 0, 0) 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 2px #ffffff24, 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;
  opacity: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper3 = styled.div`
  width: 570px;
  height: 303px;
  margin-top: 10px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px 27px 30px 30px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: flex-end;
  flex-direction: column;
`;

const EssWrapper = styled.div`
  width: 567px;
  height: 53px;
  margin-bottom: 11px;
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: 236px;
  margin-bottom: 2px;

  /* background: transparent
    linear-gradient(0deg, rgb(35, 58, 84) 0%, rgb(0, 0, 0) 100%) 0% 0% no-repeat
    padding-box; */
  background-color: rgb(0, 0, 0);
  /* box-shadow: inset 0px 0px 1px #000000; */
  border-radius: 27px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SysWrapper = styled.div`
  width: 564px;
  height: 52px;
  margin-bottom: 3px;
`;

const Wrapper5 = styled.div`
  width: 562px;
  height: 178px;
  margin-bottom: 2px;

  background: transparent
    linear-gradient(180deg, rgb(35, 58, 84) 0%, rgb(0, 0, 0) 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  border: 0.5px solid #142033;
  border-radius: 9px 9px 27px 27px;
  opacity: 1;
  ${flexboxCenter};
  align-items: flex-start;
`;

const ControlWrapper = styled.div`
  width: 554px;
  height: 155px;
  margin-top: 4px;
`;
