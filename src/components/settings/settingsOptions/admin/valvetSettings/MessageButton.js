import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';

const MessageButton = ({ name, buttonHandler }) => {
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const editState = state.buttonsOfSettings.settingsEditButton;

  return (
    <WrapperHole onClick={editState && buttonHandler}>
      <ButtonOuter>
        <ButtonInnerHole>
          <ButtonTop>
            <Title>{name}</Title>
          </ButtonTop>
        </ButtonInnerHole>
      </ButtonOuter>
    </WrapperHole>
  );
};
export default MessageButton;

const WrapperHole = styled.button`
  width: 74px;
  height: 27px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;
  opacity: 1;

  ${flexboxCenter}

  margin-left: 0.3rem;
`;
const ButtonOuter = styled.div`
  width: 72px;
  height: 25px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
  ${flexboxCenter}
`;
const ButtonInnerHole = styled.div`
  width: 64px;
  height: 17px;
  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter}
`;
const ButtonTop = styled.div`
  width: 62px;
  height: 15px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
  ${flexboxCenter}
`;
const Title = styled.span`
  text-transform: uppercase;
  font-size: 8px;
`;
