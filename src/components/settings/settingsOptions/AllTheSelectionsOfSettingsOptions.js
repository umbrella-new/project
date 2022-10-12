import { useState } from "react";
import styled from "styled-components";
import { flexboxCenter } from "../../../styles/commonStyles";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSettingsOfEss,
  setSettingsOptionsUnits,
  setSettingsOptionsWindFactor,
  setSettingsOptionsSnowFactor,
  setSettingsOptionsForceAndCommand,
  setSettingsOptionsAdmin,
} from "../../../store/slices/settingsOfEssSlice";

function AllTheSelectionsOfSettingsOptions() {
  const settingsData = [
    "units",
    "wind factor trigger",
    "snow sensor trigger",
    "force & command",
    "admin.",
  ];
  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  const [options, setOptions] = useState(0);

  const handleSelect = (value) => options !== value && setOptions(value);

  switch (options) {
    case 0: {
      dispatch(setSettingsOptionsUnits());
      break;
    }
    case 1: {
      dispatch(setSettingsOptionsWindFactor());
      break;
    }
    case 2: {
      dispatch(setSettingsOptionsSnowFactor());
      break;
    }
    case 3: {
      dispatch(setSettingsOptionsForceAndCommand());
      break;
    }
    case 4: {
      dispatch(setSettingsOptionsAdmin());
      break;
    }
    default:
      return;
  }
  return (
    <Wrapper mode={mode}>
      <SubWrapper>
        {settingsData.map((data, index) => {
          return (
            <ContainerOfEachSelectMeasurement key={index}>
              <SelectBox
                mode={mode}
                onClick={() => handleSelect(index)}
                color={options === index ? true : false}
              ></SelectBox>
              <ContainerOfEachOptions>
                <P>{data}</P>
              </ContainerOfEachOptions>
            </ContainerOfEachSelectMeasurement>
          );
        })}
      </SubWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 272px;
  height: 136px;
  background: ${(props) => (props.mode ? "#FFFFFF" : "#1b2b44 ")};
  /* background: #1b2b44 0% 0% no-repeat padding-box; */
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 8px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-evenly;
  flex-direction: column;
`;
const SubWrapper = styled.div`
  width: 270px;
  height: 136px;
  margin-left: -1px;
  margin-right: -2px;
  ${flexboxCenter};
  justify-content: space-evenly;
  flex-direction: column;
`;

const ContainerOfEachSelectMeasurement = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SelectBox = styled.div`
  width: 36px;
  height: 20px;
  margin-left: 1px;
  background: ${(props) =>
    props.color ? "#95ff45 0% 0% no-repeat padding-box" : "#46698C"};
  border: 1px solid #427293;
  opacity: 1;
`;

const ContainerOfEachOptions = styled.div`
  width: 215px;
  height: 22px;
  margin-left: 8px;
  background: #233a54 0% 0% no-repeat padding-box;
  border: 1.5px solid #46698c;
  border-radius: 6px;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const P = styled.p`
  font-size: var(--space1);
  text-align: center;
  margin-left: 6px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;

export default AllTheSelectionsOfSettingsOptions;
