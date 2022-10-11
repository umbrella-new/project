import styled from "styled-components";
import { flexboxCenter } from "../../../../../src/styles/commonStyles";
import TitleOfSelectUnitsOfMeasurement from "./TitleOfSelectUnitsOfMeasurement";
import ImperialMetricMeasurementReader from "./ImperialMetricMeasurementReader";
import { useSelector } from "react-redux";
import { selectSettingsOfEss } from "../../../../store/slices/settingsOfEssSlice";

function ContainerOfMetricImperialAndMeasurementTitle() {
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const count = state.value;
  return (
    <Wrapper>
      <Wrapper2 mode={mode}>
        <TitleOfSelectUnitsOfMeasurement />
        <ContainerMetricImperial>
          <ImperialMetricMeasurementReader
            title={"Metric"}
            temp={"C ° - CENTIGRADE"}
            energy={"Kw - KILOWATTS"}
            measure={"Cms - CENTIMETERS M - METERS"}
            gas={"M³ - CUBIC METERS"}
            backgroundColor={"180"}
            count={count}
          />
          <ImperialMetricMeasurementReader
            title={"Imperial"}
            temp={"F °- FAHRENHEIT"}
            energy={"Kw - KILOWATTS"}
            measure={"In - INCHES - Ft - FEET"}
            gas={"FT³- CUBIC FEET"}
            backgroundColor={"360"}
            count={!count}
          />
        </ContainerMetricImperial>
      </Wrapper2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 596px;
  height: 267px;
  margin-top: 37px;
  margin-left: 4px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px 12px 18px 18px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 594px;
  height: 265px;

  border: 0.5px solid black;
  border-radius: 12px 12px 18px 18px;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(
    360deg,
    ${(props) => (props.mode ? "#EBEBEB" : "rgb(0, 0, 0)")} 0%,
    ${(props) => (props.mode ? "#BBBBBB" : "rgb(35, 58, 84)")} 100%
  );
  box-shadow: inset 0 1px 1px
    rgba(255, 255, 255, ${(props) => (props.mode ? "24%" : "14%")});
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContainerMetricImperial = styled.div`
  display: flex;
  width: 594px;
  /* ${flexboxCenter} */
  justify-content: space-around;
  align-items: center;
`;

export default ContainerOfMetricImperialAndMeasurementTitle;
