import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUserState } from '../../../store/slices/userSlice';
import { flexboxCenter } from '../../../styles/commonStyles';
import ContainerLogin from '../../adminPassword/ContainerLogin';
import HoverMessageBox from './HoverMessageBox';

const SettingButton = ({
  isSettingOpen,
  column,
  handleButtonClick,
  id,
  openPasswordBox,
}) => {
  const userState = useSelector(selectUserState);
  const { isAdministrator } = userState;
  const [displayHiddenMessage, setDisplayHiddenMessage] = useState(false);

  const firstMessage = openPasswordBox
    ? 'close password box'
    : 'password required';

  const secondMessage = isSettingOpen
    ? 'click to close and logout'
    : 'shlc-switch heating load configuration';

  const message = isAdministrator ? secondMessage : firstMessage;

  return (
    <Wrapper column={column}>
      <SettingHole
        onClick={() => handleButtonClick(id)}
        onMouseEnter={() => setDisplayHiddenMessage(true)}
        onMouseLeave={() => setDisplayHiddenMessage(false)}
      >
        <SettingTop>
          <SettingIcon src={'/images/admin-setting.svg'} />
        </SettingTop>
      </SettingHole>

      {displayHiddenMessage && (
        <HiddenMessageWrapper isSettingOpen={isSettingOpen}>
          <HoverMessageBox message={message} />
        </HiddenMessageWrapper>
      )}
    </Wrapper>
  );
};

export default SettingButton;

const Wrapper = styled.div`
  width: 18px;
  height: 18px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 1;
  ${flexboxCenter}
  visibility: ${(p) => p.column === 2 && 'hidden'};
  visibility: ${(p) => p.column === 3 && 'hidden'};

  position: relative;
`;
const SettingHole = styled.button`
  width: 16px;
  height: 16px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;

  ${flexboxCenter}
`;

const SettingTop = styled.div`
  width: 13px;
  height: 13px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
  opacity: 0.8;

  ${flexboxCenter}
`;

const SettingIcon = styled.img`
  cursor: pointer;
`;

const HiddenMessageWrapper = styled.div`
  position: absolute;
  width: 150px;
  top: ${(p) => (p.isSettingOpen ? '-0.5rem' : '-1.1rem')};
  right: 0rem;
  z-index: 10000;
`;
