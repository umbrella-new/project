import styled from 'styled-components';
import Interface from '../interfaceMode/Interface';
import ContainerOfAllSettingsSelectOptionsAndButtons from './ContainerOfAllSettingsSelectOptionsAndButtons';
import { flexboxCenter } from '../../../styles/commonStyles';

function SettingsOptionsAndInterfaceMode() {
  return (
    <Wrapper>
      <ContainerOfAllSettingsSelectOptionsAndButtons />
      <Interface />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 284px;
  height: 383px;
  margin-bottom: 5px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 6px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
`;

export default SettingsOptionsAndInterfaceMode;
