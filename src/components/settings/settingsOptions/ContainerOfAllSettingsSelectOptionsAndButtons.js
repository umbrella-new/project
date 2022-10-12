import styled from "styled-components";
import { useSelector } from "react-redux";
import { flexboxCenter } from "../../../styles/commonStyles";
import TitleOfSettingsOptions from "./TitleOfSettingsOptions";
import AllTheSelectionsOfSettingsOptions from "./AllTheSelectionsOfSettingsOptions";
import Button from "./Button";
import { selectSettingsOfEss } from "../../../store/slices/settingsOfEssSlice";

function ContainerOfAllSettingsSelectOptionsAndButtons() {
  const theme = useSelector(selectSettingsOfEss);
  const mode = theme.interfaceMode;

  const handleEdit = () => {
    return;
  };
  const handleCancel = () => {
    return;
  };
  const handleApply = () => {
    return;
  };

  return (
    <Wrapper mode={mode}>
      <TitleOfSettingsOptions />
      <AllTheSelectionsOfSettingsOptions />
      <ContainerButtons mode={mode}>
        <Button name={"Edit"} onClick={() => handleEdit()} />
        <Button name={"Cancel"} onClick={() => handleCancel()} />
        <Button name={"Apply"} onClick={() => handleApply()} />
      </ContainerButtons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 280px;
  height: 216px;

  border-radius: 4px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;

  box-sizing: border-box;

  border: 0.5px solid black;
  background-image: -webkit-linear-gradient(
    180deg,
    ${(props) => (props.mode ? "#BBBBBB" : "rgb(0, 0, 0) ")} 0%,
    ${(props) => (props.mode ? "#EBEBEB" : "rgb(35, 58, 84)")} 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const ContainerButtons = styled.div`
  width: 270px;
  height: 37px;
  background: ${(props) => (props.mode ? "#FFFFFF" : "#233a54")};
  /* background: #233a54 0% 0% no-repeat padding-box; */
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1px;
`;

export default ContainerOfAllSettingsSelectOptionsAndButtons;
