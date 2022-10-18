import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSettingsOfEss,
  setSettingsEditButton,
  setSettingsCancelButton,
  setSettingsApplyButton,
} from '../../../store/slices/settingsOfEssSlice';
import Button from './Button';

function EditCancelApplyButtons() {
  const buttonNames = ['edit', 'cancel', 'apply'];
  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const dispatch = useDispatch();
  // function
  const handleClick = (id) => {
    switch (id) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        break;
      case 2:
        dispatch(setSettingsApplyButton());
        break;
      default:
        return;
    }
  };

  return (
    <ContainerButtons mode={mode}>
      {buttonNames.map((name, index) => {
        return (
          <div key={index}>
            <Button id={index} handleClick={handleClick} name={name} />
          </div>
        );
      })}
    </ContainerButtons>
  );
}

export default EditCancelApplyButtons;

const ContainerButtons = styled.div`
  width: 270px;
  height: 37px;
  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')};
  /* background: #233a54 0% 0% no-repeat padding-box; */
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1px;
`;
