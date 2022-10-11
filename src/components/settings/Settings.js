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
  const theme = useSelector(selectSettingsOfEss);
  const mode = theme.interfaceMode;
  return (
    <>
      {/* <Wrapper mode={interfaceMode}> */}
      {/* <DateAndWeather /> */}
      {/* <Header /> */}
      {/* <Title src={"/images/embrellaTitle-sm.svg"} /> */}

      {/* <GroupDiv> */}
      {/* <SidebarContainer>
          <Sidebar />
        </SidebarContainer> */}
      <TitleMainSectionContainer>
        <TitleContainer>
          <TitleSettings />
        </TitleContainer>

        <MainSectionContainer>
          <MainSection mode={mode}>
            <ContainerUnitsSettings>
              <TitleOfAllSettings
                windFactorTrigger={"wind factor trigger"}
                Units={"units"}
                SnowSensorTrigger={"snow sensor trigger"}
                ForceAndCommand={"force & command"}
                Admin={"admin."}
              />
            </ContainerUnitsSettings>
            <ContainerSettingsAndInterface>
              <SettingsOptionsAndInterfaceMode />
            </ContainerSettingsAndInterface>
            <ContainerSelectUnits>
              {/* <ContainerOfMetricImperialAndMeasurementTitle /> */}
              {/* <ContainerOfWindFactor /> */}
              {/* <ContainerOfSnowSensor /> */}
              {/* <ContainerOfForceAndCommand /> */}
              <ContainerOfAdmin />
            </ContainerSelectUnits>
          </MainSection>
        </MainSectionContainer>
      </TitleMainSectionContainer>
      {/* </GroupDiv> */}
      {/* <Footer /> */}
      {/* </Wrapper> */}
    </>
  );
};

export default Settings;

const Div = styled.div`
  height: auto;
  width: 901px;
  border: 1px solid red;
`;

const Wrapper = styled.div`
  box-sizing: border-box;

  height: 680px;
  width: 1024px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: transparent
    linear-gradient(
      90deg,
      ${(props) => (props.mode ? "#EBEBEB" : "#233a54")} 0%,
      ${(props) => (props.mode ? "#BBBBBB" : "#060d19")} 100%
    )
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff29, 0px 0px 2px #00000080;

  opacity: 1;

  padding: var(--space1) 0;
`;

const Title = styled.img`
  margin-bottom: var(--space3);
`;

const GroupDiv = styled.div`
  height: 488px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  /* border: 1px solid blue; */
`;

const SidebarContainer = styled.div`
  /* border: 1px solid red; */
  padding-left: 8px;
`;

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
  height: 462px;
  ${flexboxCenter};
  margin-top: 8px;

  /* background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px var(--unnamed-color-000000);
  border: 1px solid var(--unnamed-color-1b2b44); */
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px #000000;
  border-radius: 12px;
  opacity: 1;
`;

const MainSection = styled.div`
  width: 894px;
  height: 454px;

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

const Img = styled.img`
  margin-top: 4px;
  margin-left: 4px;
`;

const ContainerUnitsSettings = styled.div`
  position: absolute;
  left: 0%;
  top: -1%;
`;

const ContainerSettingsAndInterface = styled.div`
  position: absolute;
  left: -0.85%;
  top: 8.5%;
`;

const ContainerSelectUnits = styled.div`
  position: absolute;
  left: 32.3%;
  top: 6.5%;
`;
