import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { Context } from '../../context/Context';
import { selectEssSwitch } from '../../store/slices/essSwitchSlice';
import { selectUserState } from '../../store/slices/userSlice';
import { flexboxCenter } from '../../styles/commonStyles';
import SidebarButton from './SidebarButton';

const Sidebar = () => {
  // const { state } = useContext(Context);
  const userState = useSelector(selectUserState);
  const initialState = userState.isEssSwitch
    ? {
        ess: true,
        alarm: false,
        setting: false,
        tes: false,
        tgs: false,
      }
    : {
        ess: false,
        alarm: false,
        setting: false,
        tes: false,
        tgs: true,
      };
  const [isActivated, setIsActivated] = useState(initialState);

  const essSrc = isActivated.ess
    ? '/images/ess-button-active.svg'
    : '/images/ess-button.svg';
  const alarmSrc = isActivated.alarm
    ? '/images/alarm-button-active.svg'
    : '/images/alarm-button.svg';
  const settingSrc = isActivated.setting
    ? '/images/setting-button-active.svg'
    : '/images/setting-button.svg';
  const tgsSrc = isActivated.tgs
    ? '/images/tgs-button-active.svg'
    : '/images/tgs-button.svg';
  const tesSrc = isActivated.tes
    ? '/images/tes-button-active.svg'
    : '/images/tes-button.svg';

  const buttonProps = userState.isEssSwitch
    ? [
        [essSrc, 'ess', '/'],
        [alarmSrc, 'alarm', '/alarm'],
        [settingSrc, 'setting', '/setting'],
      ]
    : [
        [tgsSrc, 'tgs', '/'],
        [tesSrc, 'tes', '/tes'],
        [alarmSrc, 'alarm', '/alarm'],
        [settingSrc, 'setting', '/setting'],
      ];

  const handleToggler = (id) => {
    switch (id) {
      case 'ess': {
        setIsActivated({
          ess: true,
          alarm: false,
          setting: false,
          tes: false,
          tgs: false,
        });

        break;
      }
      case 'alarm': {
        setIsActivated({
          ess: false,
          alarm: true,
          setting: false,
          tes: false,
          tgs: false,
        });
        break;
      }
      case 'setting': {
        setIsActivated({
          ess: false,
          alarm: false,
          setting: true,
          tes: false,
          tgs: false,
        });
        break;
      }
      case 'tes': {
        setIsActivated({
          ess: false,
          alarm: false,
          setting: false,
          tes: true,
          tgs: false,
        });
        break;
      }
      case 'tgs': {
        setIsActivated({
          ess: false,
          alarm: false,
          setting: false,
          tes: false,
          tgs: true,
        });
        break;
      }
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <ButtonContainerOuter>
        <ButtonContainerInner>
          {buttonProps.map((button, index) => (
            <SidebarButton
              onClickHandler={handleToggler}
              src={button[0]}
              key={index}
              id={button[1]}
              link={button[2]}
            />
          ))}
        </ButtonContainerInner>
      </ButtonContainerOuter>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
`;
const ButtonContainerOuter = styled.div`
  width: 62px;
  height: fit-content;
  /* height: 165px; */
  padding: 0.3rem 0;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 6px #000000;
  border: 0.5px solid #000000;
  border-radius: 37px;
  opacity: 1;
  ${flexboxCenter}
`;

const ButtonContainerInner = styled.div`
  width: 50px;
  /* height: 152px; */
  height: fit-content;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 30px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
