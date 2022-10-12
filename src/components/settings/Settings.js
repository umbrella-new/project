import styled from "styled-components";

// import DateAndWeather from "../DateAndWeather";
// import Footer from "../Footer";
// import Header from "../Header";
// import Sidebar from "../Sidebar";
import { flexboxCenter } from "../../styles/commonStyles";
import TitleSettings from "./headings/TitleSettings";
// import TitleOfUnitsSettings from "./settingsOptions/units/TitleOfUnitsSettings";
import SettingsOptionsAndInterfaceMode from "./settingsOptions/SettingsOptionsAndInterfaceMode";
import { useSelector } from "react-redux";
import { selectSettingsOfEss } from "../../store/slices/settingsOfEssSlice";
import TitleOfAllSettings from "./headings/TitleOfAllSettings";
import ContainerOfMetricImperialAndMeasurementTitle from "./settingsOptions/units/ContainerOfMetricImperialAndMeasurementTitle";
import ContainerOfWindFactor from "./settingsOptions/windFactorTrigger/ContainerOfWindFactor";
import ContainerOfSnowSensor from "./settingsOptions/snowSensorTrigger/ContainerOfSnowSensor";
import ContainerOfForceAndCommand from "./settingsOptions/ForceAndCommand/ContainerOfForceAndCommand";
import ContainerOfAdmin from "./settingsOptions/admin/ContainerOfAdmin";

const Settings = () => {
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const {
    settingsOptionsUnits,
    settingsOptionsWindFactor,
    settingsOptionsSnowFactor,
    settingsOptionsForceAndCommand,
  } = state.allSettingsOptions;
  return (
    <>
      <TitleMainSectionContainer>
        <TitleContainer>
          <TitleSettings />
        </TitleContainer>
        <>
          <MainSectionContainer>
            <MainSection mode={mode}>
              <ContainerUnitsSettings>
                <TitleOfAllSettings />
              </ContainerUnitsSettings>
              <WrapperSettingsModeAndSelect>
                <SettingsOptionsAndInterfaceMode />
                {settingsOptionsUnits ? (
                  <ContainerOfMetricImperialAndMeasurementTitle />
                ) : settingsOptionsWindFactor ? (
                  <ContainerOfWindFactor />
                ) : settingsOptionsSnowFactor ? (
                  <ContainerOfSnowSensor />
                ) : settingsOptionsForceAndCommand ? (
                  <ContainerOfForceAndCommand />
                ) : (
                  <ContainerOfAdmin />
                )}
              </WrapperSettingsModeAndSelect>
            </MainSection>
          </MainSectionContainer>
        </>
      </TitleMainSectionContainer>
    </>
  );
};

export default Settings;

const TitleMainSectionContainer = styled.div`
  margin-right: 8px;
  /* border: 1px solid red; */
`;

const TitleContainer = styled.div`
  width: 901px;
  height: 22px;
`;

const MainSectionContainer = styled.div`
  width: 902px;
  height: auto;
  margin-top: 8px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter};
`;

const MainSection = styled.div`
  width: 898px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 2px;

  background: transparent
    linear-gradient(
      89deg,
      ${(props) => (props.mode ? "#EBEBEB" : "#233a54")} 0%,
      ${(props) => (props.mode ? "#BBBBBB" : "#060d19")} 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 2px #000000;
  border: 0.5px solid #1b2b44;
  border-radius: 10px;
  opacity: 1;
  position: relative;
  /* border: 1px solid red; */
`;

const ContainerUnitsSettings = styled.div`
  ${flexboxCenter}
  margin-top:5px;
`;

const WrapperSettingsModeAndSelect = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 4px;
`;
